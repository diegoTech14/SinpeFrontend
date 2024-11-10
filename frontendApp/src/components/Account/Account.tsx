import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AccountBalance from "./AccountBalance";
import ContactMovements from "./Movements";
import { mainAccountStyles as styles } from "./styles";

const Account: React.FC = () => {
  const insets = useSafeAreaInsets();
  const winkImage = require("../../../assets/Vector.png");

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >
      <Image source={winkImage} style={styles.image} />
      <AccountBalance />
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconContainer}>
          <FontAwesome6 name="money-bill-transfer" size={24} color="#4C51F7" />
        </View>
        <Text style={styles.text}>SINPE</Text>
        <Text style={styles.text}>móvil</Text>
      </TouchableOpacity>
      <ContactMovements />
    </View>
  );
};


export default Account;
