import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SuccessButton from '../components/SuccesButton'
import { useUserStore } from '../store';
import Api from "../Api";
import {ipv4} from '../enderecoBack.js';

export default function AddVehicle({ navigation }) {
    const [vehicleName, ChangeVehicleName] = React.useState('');
    const [vehiclePlate, ChangeVehiclePlate] = React.useState('');
    const [clienteAtual, SetClienteAtual] = React.useState({});

    const { vehicles, setVehicles } = useUserStore();

    React.useEffect(() => {
        fetch("http://" + ipv4 + ":3001/current_client")
        .then(response => response.json())
        .then(data => {
            console.log(data.id)
            SetClienteAtual(data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    function enviarDados() {
        if (!(vehicleName && vehiclePlate)) {
            alert("Preencha todos os campos!")
            return
        }
        if (vehiclePlate.length < 7) {
            alert("Placa inválida")
            return
        }

        const vehicleDetails = {
            nickname: vehicleName,
            plate: vehiclePlate,
            client_id: clienteAtual.id
        }
        console.log("vehicle details: ")
        console.log(vehicleDetails)
        
        salvarVeiculo(vehicleDetails);
        // navigation.navigate('Vehicles')
    }
    async function salvarVeiculo(vehicleDetails) {
        const response = await Api.post('/vehicles', {
            vehicle: vehicleDetails
        })
            .then(function (response) {
                console.log(response.status);
                console.log(response.data);
                let newVehicle = response.data
                setVehicles([...vehicles, newVehicle])
                console.log(vehicles)
                ChangeVehicleName("")
                ChangeVehiclePlate("")
                navigation.navigate('Router')
            })
            .catch(function (error) {
                console.log("Erro ao salvar veículo")
                console.log(error);
                alert("Credenciais ou senha inválidas.")
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Adicione um veículo</Text>
                <Text style={styles.label}>Certifique-se que você inseriu as informações corretas do veículo, elas serão usadas para identificá-lo.</Text>
            </View>
            <TextInput style={styles.input}
                onChangeText={ChangeVehicleName}
                value={vehicleName}
                placeholder='Apelido do carro' />

            <TextInput style={styles.input}
                onChangeText={ChangeVehiclePlate}
                value={vehiclePlate}
                maxLength={8}
                placeholder='Placa do carro' />

            <SuccessButton label={"Adicionar veículo"} navegarPara={() => enviarDados()} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignContent: "center",
        gap: 10,
        top: 0,
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        top: -100,
    },
    text: {
        fontSize: 48,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    },
    label:
    {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        height: 40,
        width: '90%',
        fontSize: 18,
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
        top: -100,
    },
})