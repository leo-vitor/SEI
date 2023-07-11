import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

import HomeScreen from "./HomeScreen";
import HistoryScreen from "./HistoryScreen";
import WalletScreen from "./WalletScreen";
import VehiclesScreen from "./VehiclesScreen";
import CustomDrawer from '../components/CustomDrawer';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="Reservar Vagas"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Histórico"
                component={HistoryScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="history" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Carteira"
                component={WalletScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="wallet" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Veículos"
                component={VehiclesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="car-sport" color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;