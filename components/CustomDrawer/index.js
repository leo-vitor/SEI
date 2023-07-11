import React from "react";
import { View,Text,Alert,StyleSheet } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { useUserStore } from "../../store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from "../../Api";

const removeData = async (chave) => {
    try {
        await AsyncStorage.removeItem(chave);
        console.log('Dados removidos com sucesso!');
    } catch (error) {
        console.log('Erro ao remover os dados: ', error);
    }
};

async function fetchApi(token) {
    const response = await Api({
        method: 'delete',
        url: '/logout',
        headers: { 'Authorization': token }
    })
        .then(function (response) {
            console.log(response.status);
            console.log(response.data.message);
        })
        .catch(function (error) {
            console.error(error);
        });
}

const CustomDrawer = (props)=> {
    const { user, ChangeUser, setPayments, setHistory, setVehicles, reserva, setReserva } = useUserStore()
    const showAlert = () =>
        Alert.alert(
            'Deseja se deslogar do sistema?',
            '',
            [
                {
                    text: 'Não',
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        //Chamar api de deslogar, remover user da local storage, navegar para tela de login
                        fetchApi(user.token)
                        removeData('user');
                        ChangeUser({});
                        setPayments([])
                        setHistory([])
                        setVehicles([])
                        setReserva({})
                        navigation.navigate('Login');
                    },
                }
            ],
            {
                cancelable: true,
            },
        );
    return (
        <View style ={{flex:1}}>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>

          
        </DrawerContentScrollView>
        <View style={styles.logout}>
                <Entypo name="log-out" size={25} color="black" onPress={() => showAlert()} />
                <Text>  Logout</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logout:
    {
     //transform: [{ rotate: '180deg' }],
     justifyContent: 'flex-start',
     alignContent: "center",
     margin:10,
     flexDirection: "row",
     padding:10,

     
    
    },
     

});
export default CustomDrawer;