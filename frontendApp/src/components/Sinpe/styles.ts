import { StyleSheet } from "react-native";

const sinpeStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
    },
    transferTitle: {
      color: "#4C51F7",
      fontWeight: "bold",
      fontSize: 18,
    },
    label: {
      color: "#4C51F7",
      fontWeight: "bold",
      marginBottom: 15,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4C51F7",
      marginVertical: 10,
      textAlign: "center",
    },
    contactItem: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 30,
      marginBottom: 30,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#E0E7FF",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    searchInput: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 15,
      marginBottom: 15,
    },
    iconText: {
      color: "#4C51F7",
      fontWeight: "bold",
    },
    name: {
      fontSize: 16,
      fontWeight: "500",
    },
    phone: {
      color: "#4C51F7",
    },
    button: {
      backgroundColor: "#4C51F7",
      borderRadius: 20,
    },
    buttonText: {
      textAlign: "center",
      color: "#fff",
      padding: 8,
      fontSize: 15,
      fontWeight: "bold",
    },
  });


export {sinpeStyles}