import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRouter from './screens/DrawerRouter';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
}

export default App;