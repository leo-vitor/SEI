import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigation from './routes';
import AddPaymentMethod from './AddPaymentMethod';
import AddVehicle from './AddVehicle';

const Stack = createNativeStackNavigator();

const DrawerRouter = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#121212' },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <Stack.Screen name="Main" component={DrawerNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} options={{ title: 'Adicionar método de pagamento' }} />
      <Stack.Screen name="AddVehicle" component={AddVehicle} options={{ title: 'Adicionar veículo' }} />
    </Stack.Navigator>
  );
}

export default DrawerRouter;