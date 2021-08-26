import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// authentication views
import Register from './Views/Login/register';
import Login from './Views/Login/login';
import accountView from './Views/settings/accountView';
import termsView from './Views/settings/termsView';
import policyView from './Views/settings/policyView';
import contactView from './Views/settings/contactView';

//App views
import EnterpriseView from './navigation/EnterpiseTabs'
import ClientView from './navigation/ClientTabs'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Enterprise'}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Client" component={ClientView} />
            <Stack.Screen name="Enterprise" component={EnterpriseView} />
            <Stack.Screen name="accountView" component={accountView} />
            <Stack.Screen name="termsView" component={termsView} />
            <Stack.Screen name="policyView" component={policyView} />
            <Stack.Screen name="contactView" component={contactView} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};