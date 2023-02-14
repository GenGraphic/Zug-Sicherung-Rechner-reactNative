import React from "react";
import {Image, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RechnerScreen from '../screens/RechnerScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';


const Tab = createMaterialBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/calculator-icon.png')}
                            style={{height:30, width:30}}
                        />
                    ),
                }}
                name='Rechner' 
                component={RechnerScreen} 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/user.png')}
                            style={{height:30, width:30}}
                        />
                    ),
                }}
                name='Benutzer' 
                component={ProfileScreen} 
            />
            <Tab.Screen 
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/saved.png')}
                            style={{height:30, width:30}}
                        />
                    ),
                }}
                name='Daten' 
                component={SavedScreen} 
            />
        </Tab.Navigator>
    );
}

export default Tabs;
