// WalletScreen.js
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ItemVeiculo from "../components/ItemVeículo";
import { useUserStore } from "../store";

function VehiclesScreen({navigation}) {
  const {user, ChangeUser, vehicles, setVehicles} = useUserStore();

  function handleClick() {
    navigation.navigate('AddVehicle')
}

  return (
    <View style={styles.container}>
            <Header />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Cadastre um veículo</Text>
            </View>
            <TouchableOpacity style={styles.newVehicleButtom} onPress={() => handleClick()}>
                <Text style={styles.buttomText}>Cadastre um veículo </Text>
                <AntDesign name="right" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                {vehicles.length > 0 ? <Text style={styles.text}>Veículos disponíveis:</Text> : <></>}
            </View>

            <View style={styles.ScrollViewContainer}>
                <ScrollView style={styles.scrollView}>
                    {
                        vehicles.map((veiculo, index)=><ItemVeiculo key={index} name={veiculo.vehicleName}  plate={veiculo.vehiclePlate}/>)
                    }
                </ScrollView>
            </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 5, //evita ficar em cima da barra de notificações
    flex: 1,
    backgroundColor: "white",
     alignContent: "center",
     alignItems: "center",
  },
  textContainer: {
    alignItems: 'flex-start',
    margin: 10,
    width: '95%',
  },
  text: {
    fontSize: 17,
    color: "black",
  },
  newVehicleButtom: {
    flexDirection: "row",
    backgroundColor: "#bb86fc",
    margin: 10,
    height: 60,
    width: "85%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 10,
  },
  buttomText: {
    margin: 10,
    fontSize: 17,
    color: "white",
  },
});
export default VehiclesScreen;
