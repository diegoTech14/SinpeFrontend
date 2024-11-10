import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Movement } from "../../interfaces";
import { useEffect } from "react";
import api from "../../../api";
import { movementDate } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { accountMovementsStyles as styles } from "./styles";

const ContactMovements: React.FC = () => {
  const [movements, setMovements] = useState<Movement[] | []>([]);

  const getMovements = async () => {
    try {
      const userPhone = await AsyncStorage.getItem("phoneUser");
      const response = await api.get<Movement[]>(`/movements/${userPhone}`);
      setMovements(response.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  const getMovement = async (movementId: string) => {
    const userPhone = await AsyncStorage.getItem("phoneUser");
    await AsyncStorage.setItem(
      "movement",
      JSON.stringify({ phone: userPhone, id: movementId })
    );
  };

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>
      {movements.length > 0 ? (
        <FlatList
          data={movements}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => getMovement(item.id)}>
              <View style={styles.movementRow}>
                <View style={styles.infoContainer}>
                  <Text style={styles.nameText}>SINPE móvil - {item.name}</Text>
                  <Text style={styles.dateText}>
                    {movementDate(item.date)} {item.hour}
                  </Text>
                </View>
                <Text style={styles.amountText}>- ₡{item.ammount}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>No hay movimientos</Text>
      )}
    </View>
  );
};



export default ContactMovements;
