import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Account from "./src/components/Account/Account";
import ContactsScreen from "./src/components/Contacts/Contacts";
import MoneyData from "./src/components/Sinpe/Sinpe";
import MovementDetail from "./src/components/Movements/MovementDetail";

export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
          <MovementDetail />
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
