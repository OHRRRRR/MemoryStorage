import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';

const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 97,
          paddingTop: 18,
          paddingBottom: 14,
          backgroundColor: '#f5f5f5', // 배경색
        },
        tabBarLabelStyle: {
          fontSize: 15,
          marginTop: 7,
        },
      }}>
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home" size={36} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="기억달력"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="calendar-today" size={36} color={'grey'} />
          ),
        }}
      />

      <Tab.Screen
        name="기억 갤러리"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="comment" size={36} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="내 정보"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <AntDesign name="user" size={36} color="grey" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
