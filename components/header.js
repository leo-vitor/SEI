import * as React from "react";
import { View, Text, StyleSheet, Alert, useState } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useUserStore } from "../store";
import AsyncStorage from '@react-native-async-storage/async-storage';

function BookButtom() {
    return (
        <View style={styles.bookButtom}>
            <AntDesign name="plus" size={18} color="white" />
        </View>
    );
}
// Para remover um valor
const removeData = async (chave) => {
    try {
        await AsyncStorage.removeItem(chave);
        console.log('Dados removidos com sucesso!');
    } catch (error) {
        console.log('Erro ao remover os dados: ', error);
    }
};

function Header({ navigation }) {
    const { ChangeUser } = useUserStore()

    const showAlert = () =>
        Alert.alert(
            'Deseja se deslogar do sistema?',
            '',
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        //Chamar api de deslogar, remover user da local storage, navegar para tela de login
                        removeData('user');
                        ChangeUser({});
                        navigation.navigate('Login');
                    },
                },
                {
                    text: 'Não',
                },
            ],
            {
                cancelable: true,
            },
        );

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <View style={[{ transform: [{ rotate: '180deg' }], justifyContent: 'flex-start' }]}>
                    <Entypo name="log-out" size={38} color="white" onPress={() => showAlert()} />
                </View>
                <Text style={styles.headerText}> SEI </Text>
            </View>
            <View style={styles.headerRight}>
                <Text style={{ marginEnd: 10, color: "white" }}> Reservar Vaga</Text>
                <BookButtom />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        top: 0,
        height: 90,
        backgroundColor: "#121212",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        width: '100%',
    },
    headerText: {
        fontFamily: "monospace",
        fontSize: 32,
        color: "white",
    },
    headerLeft: {
        flexDirection: "row",
        marginHorizontal: 10,
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
