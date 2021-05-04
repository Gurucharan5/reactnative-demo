import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bgImage from './assets/index.jpeg'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import DemoScreen from './screens/DemoScreen';
import FlatScreen from './screens/FlatScreen';
import ModelScreen from './screens/ModelScreen';
import TabScreen from './screens/TabScreen';
import DrawerScreen from './screens/DrawerScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Demo" component={DemoScreen} />
        <Stack.Screen name="Flat" component={FlatScreen} />
        <Stack.Screen name="Model" component={ModelScreen} />
        <Stack.Screen name="Tab" component={TabScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
});
