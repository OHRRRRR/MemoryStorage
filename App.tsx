import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './router/BottomNavigator';
// import CameraScreen from './components/MemoryCalender/CameraScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
