import React, { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MovementDetailObject, Movement } from "../../interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../api";

const MoneyData = () => {
  
  type ContactItemProps = {
    name: string;
    initials: string;
    phone: string;
  };
  
  const insets = useSafeAreaInsets();
  const [movement, setMovement] = useState<Movement>();
  const [userData, setUserData] = useState<ContactItemProps>({
    name: "",
    initials: "",
    phone: "",
  });

  const initialsName = async () => {
    const contact = await AsyncStorage.getItem("user");
    const contactObject = JSON.parse(contact || "");
    const name = contactObject.name;

    const initials = name
      .split(" ")
      .slice(0, 2)
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");

      setUserData({
      name: name,
      initials: initials,
      phone: contactObject.phone,
    });
  };


  const getMovementDetail = async ()  => {
    const movObject = await AsyncStorage.getItem("movement");
    const movStorage = JSON.parse(movObject || "");
    console.log(movStorage)
    const response = await api.get<Movement>(`/movement/${movStorage.phone}/${movStorage.id}`)
    setMovement(response.data);
  }

  useEffect(() => {
    getMovementDetail();
    initialsName();
  },[]);
  
  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="#4C51F7" />
          <Text style={styles.headerTitle}>Detalle de movimiento</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{userData.initials}</Text>
          </View>

          <Text style={styles.transactionTitle}>
            SINPE móvil - {userData.name}
          </Text>
          <Text style={styles.amount}>₡{movement?.ammount}</Text>
        </View>
        <View>
          <Text style={styles.label}>Fecha</Text>
          <Text style={styles.text}>{movement?.date} {movement?.hour}</Text>
          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.text}>{movement?.description}</Text>
          <Text style={styles.label}>Tipo de movimiento</Text>
          <Text style={styles.text}>SINPE móvil</Text>
        </View>
        <TouchableOpacity style={styles.button}>
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
