import { StyleSheet } from "react-native";
const mainAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
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
  link: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mainContactStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C51F7",
    marginVertical: 10,
    textAlign: "center",
  },
});

const sinpeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
    textAlign:"center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    padding: 8,
    fontSize: 15,
    fontWeight: "bold",
  },
  loader:{
    flex:1,
    alignContent:"center",
    justifyContent:"center"
  }
});

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


export { mainAccountStyles, mainContactStyles, sinpeStyles, movementDetailStyles };
