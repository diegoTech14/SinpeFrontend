import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const DATA = [
  {
    id: "1",
    name: "Arturo Robles",
    date: "Hoy 10:12 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "2",
    name: "Juan Fernandez",
    date: "Hoy 8:36 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "3",
    name: "Alberto Chaves",
    date: "Hoy 8:12 a.m.",
    amount: "₡5,200.00",
  },
  {
    id: "4",
    name: "Bernal Campos",
    date: "Hoy 8:00 a.m.",
    amount: "₡28,000.00",
  },
  {
    id: "5",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "6",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "7",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "8",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "9",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "10",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "11",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "12",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "13",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
  {
    id: "14",
    name: "Maria Pérez",
    date: "Hoy 8:00 a.m.",
    amount: "₡1,850.00",
  },
];

const Movements: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.movementRow}>
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>SINPE móvil - {item.name}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <Text style={styles.amountText}>- {item.amount}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  movementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  infoContainer: {
    flexDirection: "column",
  },
  nameText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  amountText: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
});

export default Movements;
