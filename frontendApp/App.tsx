import { View, StyleSheet, ScrollView } from "react-native";
import Account from "./src/components/Account/Account";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
          <Account />
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
