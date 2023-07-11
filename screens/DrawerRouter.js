import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe seus componentes de tela para as tabs
//import TabRouter from './screens/TabRouter';
import CreateAccountScreen from './CreateAccountScreen';
import DrawerNavigation from './routes';
import RecoverScreen from './RecoverScreen';
import LoginScreen from './LoginScreen';
import AddPaymentMethod from './AddPaymentMethod';
import AddVehicle from './AddVehicle';
import BookVacancy from './BookingScreen';

const Stack = createNativeStackNavigator();

const DrawerRouter = () => {

    return (
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: 'white' },
                headerTintColor: 'black',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
                 <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> 
                 <Stack.Screen name="CriarConta" component={CreateAccountScreen} options={{ title: "Criar conta" }} /> 
                 <Stack.Screen name="RecuperarConta" component={RecoverScreen} options={{ title: "Recuperar conta" }} /> 
                <Stack.Screen name="Router" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} options={{ title: "Adicionar método de pagamento" }} />
                <Stack.Screen name="AddVehicle" component={AddVehicle} options={{ title: "Adicionar veículo" }} />
                <Stack.Screen name="BookVacancy" component={BookVacancy} options={{ title: "Fazer reserva" }} />
            </Stack.Navigator>
    );
}

export default DrawerRouter;