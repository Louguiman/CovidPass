import AsyncStorage from '@react-native-async-storage/async-storage';

export default function authHeader() {
    const user = async () => {
        try {
            const value = await AsyncStorage.getItem('user');
            if (value !== null) {
                // We have data!!
                return JSON.parse(value);
            }
        } catch (error) {
            // Error retrieving data
        }

    }
      
    if (user && user.accessToken) {
      return { 'x-access-token ': user.accessToken };
    } else {
      return {};
    }
  }