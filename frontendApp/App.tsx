import { View, StyleSheet, ScrollView } from "react-native";
import Account from "./src/components/Account/Account";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactsScreen from "./src/components/Contacts/Contacts";


export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
          <ContactsScreen />
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
