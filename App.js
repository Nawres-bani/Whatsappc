import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';

import Auth from './Screens/Auth'
import home from './Screens/home'
import NewAccount from './Screens/NewAccount'
import Discussion from './Screens//Discussion';


export default function App() {
  const Stack = createNativeStackNavigator();

  return ( 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="NewAccount" component={NewAccount} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="Discussion" component={Discussion} />


    </Stack.Navigator>
  </NavigationContainer>);
 
  
}