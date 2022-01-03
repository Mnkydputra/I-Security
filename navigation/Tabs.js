import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookOpen, faHome, faUserCircle, faInbox, faQrcode } from '@fortawesome/free-solid-svg-icons';

import HomeScreens          from '../screens/HomeScreens';
import BarcodeScreens       from '../screens/BarcodeScreen';
import InboxScreens         from '../screens/InboxScreens';
import CourseScreens        from '../screens/CourseScreens';
import ProfileScreens       from '../screens/ProfileScreens';

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 30,
            left: 30,
            right: 30,
            elevation: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: 15,
            height: 50,
            ...styles.shadow
          },
        }}
        >
        <Tab.Screen
          name="Home"
          component={HomeScreens}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                <FontAwesomeIcon
                  icon={faHome}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Home</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Inbox"
          component={InboxScreens}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                <FontAwesomeIcon
                  icon={faInbox}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Inbox</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Barcode"
          component={BarcodeScreens}
          options={{
            tabBarIcon: ({ focused }) => (
                <FontAwesomeIcon
                  icon={faQrcode}
                  resizeMode="contain"
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: "#fff",
                  }}
                />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
          }}
        />
        <Tab.Screen
          name="Course"
          component={CourseScreens}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                <FontAwesomeIcon
                  icon={faBookOpen}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Course</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreens}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center", top: 3 }}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#e32f45" : "#748c94",
                  }}
                />
                <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : '#7F5DF0',
        shadowOffset: {
            widht : 0,
            height : 10,
        },
        shadowOpacity: 0.25,
        shadowRadius :3.5,
        elevation : 5
    }
});

export default Tabs;