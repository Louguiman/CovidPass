import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const API_URL = "http://192.168.43.56:3001/api/auth/";

var storeUser = async (data) => {
    try {
        await AsyncStorage.setItem(
            'user',
            JSON.stringify(data)
        );
    } catch (error) {
        // Error saving data
    }
};

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    storeUser(JSON.stringify(response.data));
                    console.log("1 - token stored")
                }
                console.log("response from authservice.login",response.data);
                return response.data;
            });
    }

    logout() {
        removeUser;
    }

    register(username, email, password, roles) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password,
            roles
        });
    }

    

    removeUser = async () => {
        try {
            await AsyncStorage.removeItem('user');
        } catch (error) {
            // Error saving data
        }
    };

    getCurrentUser = async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            // Error retrieving data
        }

    }
}

export default new AuthService();