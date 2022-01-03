import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpcaity } from 'react-native';
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreens from "../screens/HomeScreens";
import InboxScreens from '../screens/InboxScreens';
import CourseScreens from '../screens/CourseScreens';
import ProfileScreens from '../screens/ProfileScreens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOPtions={{
                showLabel : false,
                style : {
                    position: 'absolute',
                    bottom : 25,
                    left : 20,
                    right: 20,
                    elevation : 0,
                    backgroundColor: '#FFFFFF',
                    borderRadius : 15,
                    height : 90
                }
            }}>
            <Tab.Screen name="Home" component={HomeScreens}/>
            <Tab.Screen name="Inbox" component={InboxScreens}/>
            <Tab.Screen name="Course" component={CourseScreens}/>
            <Tab.Screen name="Profile" component={ProfileScreens}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : '#7F5DF0',
        shadowOffset: {
            widht : 0,
            height : 40,
        },
        shadowOpacity: 0.25,
        shadowRadius :3.5,
        elevation : 5
    }
});

export default Tabs;