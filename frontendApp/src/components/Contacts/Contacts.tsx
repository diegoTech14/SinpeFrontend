import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContactList from "./ContactList";
import SearchBar from "./SearchBar";
import { mainContactStyles as styles } from "./styles";

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



export default ContactsScreen;
