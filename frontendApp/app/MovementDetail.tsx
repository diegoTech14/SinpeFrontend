import React, { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Movement } from "../src/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";
import { movementDetailStyles as styles } from "./styles";
import { initialsFormat } from "../src/utils";
import { Link } from "expo-router";

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
    const contact = await AsyncStorage.getItem("movement");
    const contactObject = JSON.parse(contact || "");
    const name = contactObject.name;

    const initials = initialsFormat(name);

    setUserData({
      name: name,
      initials: initials,
      phone: contactObject.phone,
    });
  };

  const getMovementDetail = async () => {
    const movObject = await AsyncStorage.getItem("movement");
    const movStorage = JSON.parse(movObject || "");
    const response = await api.get<Movement>(
      `/movement/${movStorage.phone}/${movStorage.id}`
    );
    setMovement(response.data);
  };

  useEffect(() => {
    initialsName();
    getMovementDetail();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {movement ? (
          <View>
            <View style={styles.header}>
              <Link href="/Account" asChild>
                <AntDesign name="arrowleft" size={24} color="#4C51F7" />
              </Link>

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
              <Text style={styles.text}>
                {movement?.date} {movement?.hour}
              </Text>
              <Text style={styles.label}>Descripción</Text>
              <Text style={styles.text}>{movement?.description}</Text>
              <Text style={styles.label}>Tipo de movimiento</Text>
              <Text style={styles.text}>SINPE móvil</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#5A67D8"
          />
        )}
      </View>
    </SafeAreaProvider>
  );
};

export default MoneyData;
