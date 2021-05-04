import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen}  />
        </Drawer.Navigator>
    )
}

export default DrawerScreen

const styles = StyleSheet.create({})
