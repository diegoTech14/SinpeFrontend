import { StyleSheet } from "react-native";

const contactListStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#4C51F7",
      marginVertical: 10,
      textAlign: "center",
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#4C51F7",
      marginVertical: 10,
    },
    contactItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
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
    iconText: {
      color: "#4C51F7",
      fontWeight: "bold",
    },
    name: {
      fontSize: 16,
      fontWeight: "500",
    },
    phone: {
      color: "#6B7280",
    },
    chevron: {
      marginLeft: "auto",
    },
  });

  const searchBarStyles = StyleSheet.create({
    searchInput: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 15,
      marginBottom: 15,
    },
  });
  

export {
    contactListStyles,
    searchBarStyles
}