import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';


const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    )
}

export default TabScreen

const styles = StyleSheet.create({})
