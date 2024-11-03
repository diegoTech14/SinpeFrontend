import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";


const ContactsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>
          <AntDesign name="arrowleft" size={24} color="black" /> Seleccioná un
          contacto
        </Text>
        <SearchBar />
        <ContactList />
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C51F7",
    marginVertical: 10,
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4C51F7",
    marginVertical: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
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
  iconText: {
    color: "#4C51F7",
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  phone: {
    color: "#6B7280",
  },
  chevron: {
    marginLeft: "auto",
  },
});

export default ContactsScreen;
