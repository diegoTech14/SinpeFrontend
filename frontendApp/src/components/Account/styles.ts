import { StyleSheet } from "react-native";

const accountBalanceStyles = StyleSheet.create({
    title: {
      color: "#4C51F7",
      fontSize: 22,
      fontWeight: "bold",
    },
    ammount: {
      fontSize: 30,
      fontWeight: "bold",
    },
    text: {
      color: "#3d3d3d",
      marginBottom: 5,
      marginTop: 15,
    },
  });

  const accountMovementsStyles = StyleSheet.create({
    container: {
      padding: 1,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 16,
    },
    movementRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
    },
    infoContainer: {
      flexDirection: "column",
    },
    nameText: {
      fontSize: 16,
      color: "#333",
      fontWeight: "600",
    },
    dateText: {
      fontSize: 14,
      color: "#888",
    },
    amountText: {
      fontSize: 16,
      color: "red",
      fontWeight: "600",
    },
    loader:{
      flex:1,
      alignContent:"center",
      justifyContent:"center"
    }
  });

  const mainAccountStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      marginTop: 30,
      marginBottom: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    iconContainer: {
      backgroundColor: "#fff",
      width: 60,
      height: 60,
      borderRadius: 30,
      marginBottom: 5,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 4,
    },
    text: {
      color: "#5A67D8",
      fontSize: 14,
      fontWeight: "600",
      textAlign: "center",
    },
  });
  

export {
  accountBalanceStyles,
  accountMovementsStyles,
  mainAccountStyles
}