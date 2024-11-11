import React, { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sinpe } from "../src/interfaces";
import api from "../api";
import { sinpeStyles as styles } from "./styles";
import { initialsFormat } from "../src/utils";
import { Link } from "expo-router";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

type ContactItemProps = {
  name: string;
  initials: string;
  phone: string;
};

const MoneyData = () => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [sinpeData, setSinpeData] = useState<Sinpe>({
    phoneSend: "",
    phoneReceive: "",
    ammount: 0,
    detail: "",
  });

  const [userData, setUserData] = useState<ContactItemProps>({
    name: "",
    initials: "",
    phone: "",
  });

  const initialsName = async () => {
    const contact = await AsyncStorage.getItem("user");
    const contactObject = JSON.parse(contact || "");
    const name = contactObject.name;

    const initials = initialsFormat(name);
    setUserData({
      name: name,
      initials: initials,
      phone: contactObject.phone,
    });
  };

  const handleInputChange = (field: "ammount" | "detail", value: string) => {
    setSinpeData((prevData) => ({
      ...prevData,
      [field]: field === "ammount" ? parseFloat(value) || 0 : value,
    }));
  };

  const sendSinpe = async () => {
    try {
      await api.patch("/balance", sinpeData);
    } catch (error) {
      console.error("Error loading phones from AsyncStorage:", error);
    }
  };

  const sinpe = async () => {
    try {
      const userSend = await AsyncStorage.getItem("phoneUser");
      const userReceive = await AsyncStorage.getItem("user");

      const phoneReceive = JSON.parse(userReceive || "");
      const phoneSend = JSON.parse(userSend || "");

      setSinpeData((prevData) => ({
        ...prevData,
        phoneSend: phoneSend.toString() || "",
        phoneReceive: phoneReceive.phone || "",
      }));

      Alert.alert(
        "Transferencia Confirmada",
        "La transferencia de dinero se realizó con éxito.",
        [
          {
            text: "OK",
            onPress: () => {
              router.push("/Account");
            },
          },
        ]
      );
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    if (sinpeData.phoneSend && sinpeData.phoneReceive) {
      sendSinpe();
    }
  }, [sinpeData]);

  useEffect(() => {
    initialsName();
  }, []);

  return (
    <SafeAreaProvider>
      {userData ? (
        <View style={[styles.container, { paddingTop: insets.top }]}>
          <Text style={styles.title}>
            <Link href="/Contacts">
              <AntDesign name="arrowleft" size={24} color="black" />
            </Link>
            Enviar dinero{" "}
          </Text>
          <Text style={styles.transferTitle}>Transferir a</Text>
          <TouchableOpacity style={styles.contactItem}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>{userData.initials}</Text>
            </View>
            <View>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.phone}>+506 {userData.phone}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.label}>Monto</Text>
          <TextInput
            onChangeText={(text) => handleInputChange("ammount", text)}
            placeholder="Monto a transferir"
            style={styles.searchInput}
          />
          <Text style={styles.label}>Detalle</Text>
          <TextInput
            onChangeText={(text) => handleInputChange("detail", text)}
            placeholder="Detalle"
            style={styles.searchInput}
          />
          <View>
            <TouchableOpacity onPress={sinpe} style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ActivityIndicator style={styles.loader} size="large" color="#5A67D8" />
      )}
    </SafeAreaProvider>
  );
};

export default MoneyData;
