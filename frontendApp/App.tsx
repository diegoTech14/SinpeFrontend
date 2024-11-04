import { View, StyleSheet, ScrollView } from "react-native";
import Account from "./src/components/Account/Account";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactsScreen from "./src/components/Contacts/Contacts";
import MoneyData from "./src/components/Money/SetMoneyData";

export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
          <MoneyData />
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 12,
  },
});