import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AccountBalance from "./AccountBalance";
import Movements from "./Movements";

const Account: React.FC = () => {
  const insets = useSafeAreaInsets();
  const winkImage = require("../../../assets/Vector.png");

  return (
    <View style={[styles.container,{ paddingBottom: insets.bottom, paddingTop: insets.top }]}>
      <Image source={winkImage} style={styles.image} />
      <AccountBalance />
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
        <FontAwesome6 name="money-bill-transfer" size={24} color="#4C51F7" />
        </View>
        <Text style={styles.text}>SINPE</Text>
        <Text style={styles.text}>móvil</Text>
      </TouchableOpacity>
      <Movements />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image: {
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: "#5A67D8",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Account;
