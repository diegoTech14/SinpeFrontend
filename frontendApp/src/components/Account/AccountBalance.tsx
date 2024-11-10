import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { Contact } from "../../interfaces";
import api from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { accountBalanceStyles as styles } from "./styles";

const AccountBalance: React.FC = () => {
  const [contactData, setContactData] = useState<Contact | null>(null);

  const getContactData = async () => {
    try {
      const response = await api.get<Contact>("/first");
      await AsyncStorage.setItem("phoneUser", response.data.phone.toString());
      setContactData(response.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Cuenta Colones</Text>
      <Text style={styles.text}>Saldo disponible</Text>
      <Text style={styles.ammount}>₡{contactData?.balance}</Text>
      <Text style={styles.text}>¿Qué querés hacer?</Text>
    </View>
  );
};

export default AccountBalance;
