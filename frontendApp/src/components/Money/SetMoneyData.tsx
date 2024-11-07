import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const onPressButton = () => {
  Alert.alert("¡Botón presionado!");
};

const MoneyData = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>
          <AntDesign name="arrowleft" size={24} color="black" /> Enviar dinero{" "}
        </Text>
        <Text style={styles.transferTitle}>Transferir a</Text>
        <TouchableOpacity style={styles.contactItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>CN</Text>
          </View>
          <View>
            <Text style={styles.name}>Carlos Naranjo</Text>
            <Text style={styles.phone}>+506 1234-5678</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.label}>Monto</Text>
        <TextInput
          placeholder="Monto a transferir"
          style={styles.searchInput}
        />
        <Text style={styles.label}>Detalle</Text>
        <TextInput placeholder="Detalle" style={styles.searchInput} />
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Confirmar
                </Text>    
            </ TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  transferTitle: {
    color: "#4C51F7",
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    color: "#4C51F7",
    fontWeight: "bold",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C51F7",
    marginVertical: 10,
    textAlign: "center",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E7FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  iconText: {
    color: "#4C51F7",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  phone: {
    color: "#4C51F7",
  },
  button:{
    backgroundColor:"#4C51F7",
    borderRadius:20,
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    padding:8,
    fontSize:15,
    fontWeight:"bold"

  }
});

export default MoneyData;
