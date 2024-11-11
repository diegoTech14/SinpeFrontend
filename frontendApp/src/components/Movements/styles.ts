import { StyleSheet } from "react-native";

const movementDetailStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 16,
      justifyContent: "space-between",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4C51F7",
      marginLeft: 10,
    },
    content: {
      alignItems: "center",
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#E0E7FF",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 15,
    },
    iconText: {
      color: "#4C51F7",
      fontSize: 20,
      fontWeight: "bold",
    },
    transactionTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
    amount: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#000",
      marginBottom: 20,
    },
    label: {
      color: "#A1A1A1",
      fontSize: 14,
      marginTop: 10,
    },
    text: {
      fontSize: 16,
      color: "#000",
      marginBottom: 10,
    },
    button: {
      backgroundColor: "#4C51F7",
      borderRadius: 20,
      padding: 12,
      alignItems: "center",
      marginBottom: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold",
    },
    loader:{
      flex:1,
      alignContent:"center",
      justifyContent:"center"
    }
  });
  
export {
    movementDetailStyles
}