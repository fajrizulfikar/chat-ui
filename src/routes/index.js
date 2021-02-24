import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Test from '../views/Test';

const App = () => {
  return (
    <NavigationContainer>
      <Test />
    </NavigationContainer>
  )
};

export default App;
