import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const contacts = [
  {
    title: "A",
    data: ["Ana Campos", "Ana Lucia", "Alberto Chaves", "Arturo Robles"],
  },
  { title: "B", data: ["Bernal Campos"] },
  { title: "C", data: ["Carlos Naranjo"] },
  {
    title: "D",
    data: ["Daniel Solano", "Daniel Solano", "Daniel Solano", "Daniel Solano"],
  },
];

type ContactItemProps = {
  name: string;
};

const ContactItem: React.FC<ContactItemProps> = ({ name }) => (
  <TouchableOpacity style={styles.contactItem}>
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{name.charAt(0)}</Text>
    </View>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>+506 1234-5678</Text>
    </View>
    <FontAwesome6
      name="chevron-right"
      size={20}
      color="#5A67D8"
      style={styles.chevron}
    />
  </TouchableOpacity>
);

const ContactList = () => {
  return (
    <SectionList
      sections={contacts}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <ContactItem name={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4C51F7",
    marginVertical: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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

export default ContactList;
