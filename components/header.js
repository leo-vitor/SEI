import * as React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity,Image } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useUserStore } from "../store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from "../Api";

// Para remover um valor
const removeData = async (chave) => {
    try {
        await AsyncStorage.removeItem(chave);
        console.log('Dados removidos com sucesso!');
    } catch (error) {
        console.log('Erro ao remover os dados: ', error);
    }
};

//Lembrar de trocar endereço da url base
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

function Header({ navigation }) {
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

    //Permite apenas uma reserva ativa por vez
    function handleClick() {
        if (JSON.stringify(reserva) === '{}') {
            navigation.navigate("BookVacancy")
        }
        else {
            alert("Você já possui uma reserva.")
            return
        }
    }
    function SEIbuttom() {
        return (
          <TouchableOpacity onPress={() => {navigation.openDrawer()}}>
            <View style={styles.headerLeft}>
                <Entypo name="menu" size={30} color="black" />
            </View>
          </TouchableOpacity>
        );
      }

    return (
        <View style={styles.header}>
            <SEIbuttom/>
            <View style={styles.headerRight}>
                <Image source={require('../assets/SEI-icon-2.png')} style={styles.headerLogo} />    
            </View>
            {/* <View style={[{ transform: [{ rotate: '180deg' }], justifyContent: 'flex-start' }]}>
                <Entypo name="log-out" size={25} color="black" onPress={() => showAlert()} />
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        top: 10,
        height: 90,
        backgroundColor: "white",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        width: '100%',
    },
    headerLogo: {
        width: 85,
        height: 40,
        margin: 10,
        left: -10,
    },
    headerLeft: {
        flexDirection: "row",
        marginHorizontal: 10,
        alignItems: "center",
    },
    headerRight: {
        marginHorizontal: 15,
        flexDirection: "row",
        alignContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
    },
    bookButtom: {
        backgroundColor: "#1fd1a4",
        height: 40,
        width: 40,
        borderRadius: 7,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    drawerContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    drawerItem: {
        fontSize: 16,
        marginBottom: 10,
    },
});
export default Header;
