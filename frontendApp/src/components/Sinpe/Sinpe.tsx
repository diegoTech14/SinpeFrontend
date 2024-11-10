import React, { useEffect, useState } from "react";
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
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sinpe } from "../../interfaces";
import api from "../../../api";
import { sinpeStyles as styles } from "./styles";

type ContactItemProps = {
  name: string;
  initials: string;
  phone: string;
};

const MoneyData = () => {
  const insets = useSafeAreaInsets();
  const [sinpeData, setSinpeData] = useState<Sinpe>({
    phoneSend:"",
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

  const handleInputChange = (field: "ammount" | "detail", value: string) => {
    setSinpeData((prevData) => ({
      ...prevData,
      [field]: field === "ammount" ? parseFloat(value) || 0 : value,
    }));
  };

  const sendSinpe = async () => {
    try {
      const response = await api.patch("/balance",sinpeData);
      console.log("Sinpe sent:", response.data);
    } catch (error) {
      console.error("Error loading phones from AsyncStorage:", error);
    }
  }
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
    } catch (error) {
      console.error("Error loading phones from AsyncStorage:", error);
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
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>
          <AntDesign name="arrowleft" size={24} color="black" /> Enviar dinero{" "}
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
          onChangeText={(text) => handleInputChange("ammount",text)}
          placeholder="Monto a transferir"
          style={styles.searchInput}
        />
        <Text style={styles.label}>Detalle</Text>
        <TextInput
          onChangeText={(text) => handleInputChange("detail",text)}
          placeholder="Detalle"
          style={styles.searchInput}
        />
        <View>
          <TouchableOpacity 
            style={styles.button}
            onPress={sinpe}
            >
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};



export default MoneyData;
