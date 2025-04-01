import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import CarrosselEp from "@/components/Carrosel/CarroselEp";
import { useNavigation } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import { temporadas } from "../VideoPlayerHome/videoPlayerHome";

interface IVideoPlayer {
  tipo: "Filme" | "Série";
  url: string;
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ tipo, url }) => {
  const videoRef = useRef<Video>(null);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);
  const [episodios, setEpisodios] = useState<boolean>(false);

  const navigation = useNavigation();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    StatusBar.setHidden(true);

    NavigationBar.setVisibilityAsync("hidden");

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      StatusBar.setHidden(false);
      NavigationBar.setVisibilityAsync("visible");
    };
  }, []);

  useEffect(() => {
    const hideControlsTimeout = setTimeout(() => {
      if (isPlaying) {
        setControlsVisible(false);
      }
    }, 4000);

    return () => clearTimeout(hideControlsTimeout);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
  }, [isPlaying]);

  const handleTimeUpdate = (status: any) => {
    if (!status.isLoaded) return;
    setCurrentTime(status.positionMillis);
    setDuration(status.durationMillis);
    setProgress((status.positionMillis / status.durationMillis) * 100);
  };

  const handleSeek = (event: any) => {
    if (videoRef.current) {
      const { locationX } = event.nativeEvent;
      const seekTime = (locationX / Dimensions.get("window").width) * duration;
      videoRef.current.setPositionAsync(seekTime);
    }
  };

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
      setControlsVisible(true);
    }
  };

  const toggleMute = async () => {
    if (videoRef.current) {
      await videoRef.current.setIsMutedAsync(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const handleRewind = async () => {
    if (videoRef.current) {
      const newTime = Math.max(currentTime - 10000, 0);
      await videoRef.current.setPositionAsync(newTime);
    }
  };

  const handleForward = async () => {
    if (videoRef.current) {
      const newTime = Math.min(currentTime + 10000, duration);
      await videoRef.current.setPositionAsync(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const openEpisodios = () => {
    setEpisodios(!episodios);
  };

  const handleScreenPress = () => {
    setControlsVisible(true);
    setTimeout(() => {
      if (isPlaying) {
        setControlsVisible(false);
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {controlsVisible && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back-circle" size={24} color="white" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{tipo}: The Big Bang Theory</Text>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
      <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={{
              uri: url, // Usa a URL passada como prop
            }}
            style={styles.video}
            resizeMode={ResizeMode.COVER}
            shouldPlay={isPlaying}
            isMuted={isMuted}
            onPlaybackStatusUpdate={handleTimeUpdate}
          />
        </View>
      </TouchableWithoutFeedback>
      {controlsVisible && (
        <View style={styles.controls}>
          <TouchableOpacity onPress={handleRewind}>
            <MaterialIcons name="replay-10" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause}>
            {isPlaying ? (
              <FontAwesome name="pause" size={40} color="white" />
            ) : (
              <FontAwesome name="play" size={40} color="white" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForward}>
            <MaterialIcons name="forward-10" size={40} color="white" />
          </TouchableOpacity>
        </View>
      )}
      {controlsVisible && (
        <>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.timeText}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </Text>
          </View>

          <Modal visible={episodios} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
              <CarrosselEp
                showCloseButton={true}
                temporadas={temporadas}
                onClose={openEpisodios}
                px="20px"
                py="40px"
              />
            </View>
          </Modal>

          <View style={styles.bottomControls}>
            {tipo === "Série" && (
              <TouchableOpacity onPress={openEpisodios}>
                <MaterialIcons name="collections" size={24} color="white" />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={toggleMute}>
              {isMuted ? (
                <MaterialIcons name="volume-off" size={24} color="white" />
              ) : (
                <MaterialIcons name="volume-up" size={24} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "white",
    marginLeft: 8,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  videoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  controls: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  progressContainer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: "white",
    borderRadius: 2,
  },
  progress: {
    height: "100%",
    backgroundColor: "yellow",
    borderRadius: 2,
  },
  timeText: {
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  bottomControls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default VideoPlayer;