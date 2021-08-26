import React, { useState,  createRef } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TextInput,Keyboard, TouchableOpacity } from 'react-native';

import AuthService from "../../services/auth.services";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champs est requis!
      </div>
    );
  }
};

const login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const passwordInputRef = createRef();

  const onPressLogin = () => {
    const payload = { username, password };

    const onSuccess = (user) => {
      console.log("onSuccess")
      // routing according to the user role
      if (user.roles.includes("ROLE_MODERATOR") || user.roles.includes("ROLE_ADMIN")) {
        props.navigation.navigate('Enterprise')
      } else if (user.roles.includes("ROLE_USER")) {
        props.navigation.navigate('Client')
      }

    };

    const onFailure = (error) => {
      console.log("on failure",error && error.response);
      setMessage(error.response.message)
      
      
    };

    AuthService.login(username, password)
    .then(user =>  onSuccess(user))
    .catch(error => onFailure(error))
      

  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>CovidPass</Text>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Identifiant"
          placeholderTextColor="#fff"
          returnKeyType="next"
          onSubmitEditing={() =>
            passwordInputRef.current &&
            passwordInputRef.current.focus()
          }
          onChangeText={(username) => setUsername(username)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Mot de Passe"
          placeholderTextColor="#fff"
          ref={passwordInputRef}
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)} />
      </View>
      {message != '' ? (
              <Text style={styles.errorTextStyle}>
                {message}
              </Text>
            ) : null}
      <TouchableOpacity>
        <Text style={styles.forgot}>Mot de Passe oublié?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
        <Text  style={styles.loginText}>Se Connecter</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white",

  },
  credentials: {
    color: '#fff',
    marginBottom: 5,
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default login;