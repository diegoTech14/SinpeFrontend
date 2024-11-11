import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Movement } from "../../interfaces";
import { movementDate } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { accountMovementsStyles as styles } from "./styles";
import { useRouter } from "expo-router";
import api from "../../../api"; 

interface ContactMovementsProps {
  getContactData: () => Promise<void>;
}

const ContactMovements: React.FC<ContactMovementsProps> = ({
  getContactData,
}) => {
  const router = useRouter();
  const [movements, setMovements] = useState<Movement[]>([]);
  const [visibleMovements, setVisibleMovements] = useState<Movement[]>([]); 
  const [page, setPage] = useState(1); 
  const [refreshing, setRefreshing] = useState(false);

  const getMovements = async () => {
    try {
      const userPhone = await AsyncStorage.getItem("phoneUser");
      const response = await api.get<Movement[]>(`/movements/${userPhone}`);
      setMovements(response.data);
      setVisibleMovements(response.data.slice(0, 10));
    } catch (error) {
      console.error("Error", error);
    }
  };

  // This method loads more data when it reaches the limit which is 10
  const loadMoreData = () => {
    if (movements.length > visibleMovements.length) {
      const nextPage = page + 1;
      setPage(nextPage);
      const nextMovements = movements.slice(
        visibleMovements.length,
        nextPage * 10
      ); 
      setVisibleMovements((prev) => [...prev, ...nextMovements]);
    }
  };

  const getMovement = async (movementId: string, userName: string) => {
    const userPhone = await AsyncStorage.getItem("phoneUser");
    await AsyncStorage.setItem(
      "movement",
      JSON.stringify({ phone: userPhone, id: movementId, name: userName })
    );
    router.push("/MovementDetail");
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      getContactData();
      getMovements(); 
    }, 2000);
  }, []);

  useEffect(() => {
    getMovements();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>
      {movements.length > 0 ? (
        <FlatList
          data={visibleMovements}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => getMovement(item.id, item.name)}>
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
          onEndReached={loadMoreData} 
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <ActivityIndicator style={styles.loader} size="large" color="#5A67D8" />
      )}
    </View>
  );
};

export default ContactMovements;
