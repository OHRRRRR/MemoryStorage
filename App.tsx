import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './router/BottomNavigator';

export default function App() {
  return (
    <Container>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f3f2f6;
`;
