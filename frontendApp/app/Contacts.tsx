import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContactList from "../src/components/Contacts/ContactList";
import SearchBar from "../src/components/Contacts/SearchBar";
import { mainContactStyles as styles } from "./styles";
import { Link } from "expo-router";

const ContactsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>
          <Link href="/Account">
            <AntDesign name="arrowleft" size={24} color="black" />
          </Link>
          Seleccioná un contacto
        </Text>
        <SearchBar />
        <ContactList />
      </View>
    </SafeAreaProvider>
  );
};

export default ContactsScreen;
