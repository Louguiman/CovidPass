import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

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


export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    'x-access-token ': user.accessToken
  }
});