import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useUserStore } from "../../store";

export default function ItemHistorico({ data, entrada, saida, veiculo, valor, id }) {

    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log('Item pressionado')}>
            <View style={styles.linha1}>
                <Text style={styles.info}>Data: {data}</Text>
                <Text style={styles.info}>Entrada: {entrada}</Text>
            </View>
            <View style={styles.linha1}>
                <Text style={styles.info}>Saída: {saida}</Text>
                <Text style={styles.info}>Valor: {valor}</Text>
            </View>
            <Text style={styles.info}>Veículo: {veiculo}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
        height: 80,
        alignItems: 'flex-start',
        borderColor: 'black',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        padding: 12,
        justifyContent: 'space-between',
    },
    linha1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    info: {
        color: 'black',
        // backgroundColor: 'gray',
        fontSize: 13
    },
    statusAtivo: {
        color: 'green',
    },
    statusInativo: {
        color: 'red',
    }
})