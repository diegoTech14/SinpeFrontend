import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const onPressButton = () => {
  Alert.alert("¡Botón presionado!");
};

const MoneyData = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="#4C51F7" />
          <Text style={styles.headerTitle}>Detalle de movimiento</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>CN</Text>
          </View>

          <Text style={styles.transactionTitle}>
            SINPE móvil - Carlos Naranjo
          </Text>
          <Text style={styles.amount}>₡30,000.00</Text>
        </View>
        <View>
          <Text style={styles.label}>Fecha</Text>
          <Text style={styles.text}>12 de Octubre 2022, 12:15 pm</Text>
          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.text}>Fiesta de Hallowink</Text>
          <Text style={styles.label}>Tipo de movimiento</Text>
          <Text style={styles.text}>SINPE móvil</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C51F7",
    marginLeft: 10,
  },
  content: {
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E7FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  iconText: {
    color: "#4C51F7",
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  label: {
    color: "#A1A1A1",
    fontSize: 14,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4C51F7",
    borderRadius: 20,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default MoneyData;
