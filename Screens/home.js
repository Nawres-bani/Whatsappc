import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


import { View, Text, StyleSheet,Button, ImageBackground} from 'react-native';
import React from 'react'
import ListProfils from './HomeScreens/ListProfils';
import Groups from './HomeScreens/Groups';
import MyProfils from './HomeScreens/MyProfils';


export default function home(props) {
  const currentid=props.route.params.currentid;;

  const navigation = useNavigation();

  return (

  
        <Tab.Navigator>

        <Tab.Screen name="ListProfils" component={ListProfils} initialParams={{ currentid:currentid }}></Tab.Screen>
        <Tab.Screen name="Groups" component={Groups}></Tab.Screen>
        <Tab.Screen name="MyProfils" component={MyProfils} initialParams={{ currentid:currentid }}></Tab.Screen>

        </Tab.Navigator>
 
  
  );
}
const styles =StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }});