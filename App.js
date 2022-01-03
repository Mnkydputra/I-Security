import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import Tabs from './navigation/Tabs';

const App = () => {
    return (
      <NavigationContainer>
        <Tabs />
        
      </NavigationContainer>
    );
}

export default App;