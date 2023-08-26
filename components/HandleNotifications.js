import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

/**
 * @description Registers the device for push notifications
 */
const registerForPushNotif = async () => {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  // get push token only on physical devices
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;
    // ask for permission if not granted
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('(notification) Permission not granted!');
      return;
    }

    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: 'c58e71b0-58fc-40b5-9c31-ebab44085184',
      })
    ).data;
  } else {
    console.log('Notifications not supported on this device.');
  }

  return token;
};

/**
 * @description Schedules a notification to be sent
 */
const schedulePushNotif = async (title) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Check out this movie!',
      body: `Looking for movies to add to your watchlist? "${title}" is now showing in theatres!`,
    },
    trigger: null,
  });
};

export { registerForPushNotif, schedulePushNotif };
