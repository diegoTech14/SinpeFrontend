import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AccountBalance: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Cuenta Colones</Text>
      <Text style={styles.text}>Saldo disponible</Text>
      <Text style={styles.ammount}>₡36,850.00</Text>
      <Text style={styles.text}>¿Qué querés hacer?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        color:'#4C51F7',
        fontSize:22,
        fontWeight:'bold'
    },
    ammount:{
      fontSize:30,
      fontWeight:'bold'
    },
    text:{
      color:"#3d3d3d",
      marginBottom:5,
      marginTop:15
    }
})

export default AccountBalance;
