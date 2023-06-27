import 'react-native-gesture-handler';
import { useContext } from 'react';
import * as React from "react";
import { View, Text, StyleSheet, DrawerLayoutAndroid, useState } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';


function BookButtom() {
    return (
        <View style={styles.bookButtom}>
            <AntDesign name="plus" size={18} color="white" />
        </View>
    );
}
function Header() {
   

    return (
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View>
                    </View>
                    <Text style={styles.headerText}> SEI </Text>
                </View>
                <View style={styles.headerRight}>
                    <Text style={{ marginEnd: 10, color: "black" }}> Reservar Vaga</Text>
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
        backgroundColor: "white",
        alignContent: "space-between",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        width: '100%',
    },
    headerText: {
        fontFamily: "monospace",
        fontSize: 32,
        color: "black",
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
