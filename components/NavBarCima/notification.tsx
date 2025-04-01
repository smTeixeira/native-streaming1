import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNotification } from '../../contexts/NotificationContext';

const NotificationBell = () => {
  const { notifications, markAsRead, clearNotifications } = useNotification();
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((notification) => !notification.read).length;

  const handleToggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const handleClearNotifications = () => {
    clearNotifications();
    setIsOpen(false);
  };

  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleNotifications} style={styles.bellIcon}>
        <Icon name="bell" size={32} color="#FFF" />
        {unreadCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>

    </View>

    {isOpen && (
        <View style={styles.notificationsContainer}>
          <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.notificationItem, item.read && styles.readNotification]}
                onPress={() => handleMarkAsRead(item.id)}
              >
                <Text style={styles.notificationText}>{item.message}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhuma notificação</Text>
            }
          />
          <TouchableOpacity onPress={handleClearNotifications} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Limpar notificações</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  bellIcon: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
  },
  notificationsContainer: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 300,
    backgroundColor: '#101010',
    borderRadius: 5,
    padding: 10,
    zIndex: 1000,
  },
  notificationItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  readNotification: {
    opacity: 0.6,
  },
  notificationText: {
    color: '#FFF',
    fontSize: 14,
  },
  emptyText: {
    color: '#FFF',
    textAlign: 'center',
    padding: 10,
  },
  clearButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default NotificationBell;