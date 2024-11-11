import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AccountBalance from "../src/components/Account/AccountBalance";
import ContactMovements from "../src/components/Account/Movements";
import { mainAccountStyles as styles } from "./styles";
import { Link } from "expo-router";

const Account: React.FC = () => {
  const insets = useSafeAreaInsets();
  const winkImage = require("../assets/Vector.png");

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom, paddingTop: insets.top },
      ]}
    >

      <View style={styles.image}>
        <Image source={winkImage} />
      </View>

        <AccountBalance />
    
        <Link href="/Contacts" asChild>
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconContainer}>
              <FontAwesome6
                name="money-bill-transfer"
                size={24}
                color="#4C51F7"
              />
            </View>
            <Text style={styles.text}>SINPE</Text>
            <Text style={styles.text}>móvil</Text>
          </TouchableOpacity>
        </Link>
      
      <View>
        <ContactMovements />
      </View>
    </View>
  );
};

export default Account;
