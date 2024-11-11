import React from "react";
import { Text, View } from "react-native";
import { accountBalanceStyles as styles } from "./styles";

interface AccountBalanceProps {
  balance: number; 
}

const AccountBalance: React.FC<AccountBalanceProps> = ({balance}) => {
  return (
    <View>
      <Text style={styles.title}>Cuenta Colones</Text>
      <Text style={styles.text}>Saldo disponible</Text>
      <Text style={styles.ammount}>₡{balance}</Text>
      <Text style={styles.text}>¿Qué querés hacer?</Text>
    </View>
  );
};

export default AccountBalance;
