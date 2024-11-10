import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import api from "../../../api";
import { Contact } from "../../interfaces";

type ContactItemProps = {
  name: string;
  phone: string;
};

const handleStorage = async (object: ContactItemProps) => {
  await AsyncStorage.setItem("user", JSON.stringify(object));
}

const ContactItem: React.FC<ContactItemProps> = ({ name, phone }) => {
  
  const initials = name
    .split(" ")
    .slice(0, 2) 
    .map(word => word.charAt(0).toUpperCase())
    .join(""); 

  return (
    <TouchableOpacity style={styles.contactItem}
      onPress={() => handleStorage({name, phone})}
      >
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{initials}</Text>
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>+506 {phone}</Text>
      </View>
      <FontAwesome6 name="chevron-right" size={20} color="#5A67D8" style={styles.chevron} />
    </TouchableOpacity>
  );
};

const ContactList = () => {
  const [sections, setSections] = useState<{ title: string; data: Contact[] }[]>([]);

  const getContacts = async () => {
    try {
      const userPhone = await AsyncStorage.getItem("phoneUser");
      const response = await api.get<Contact[]>(`/all/${userPhone}`);
      const formattedSections = formatContacts(response.data);
      setSections(formattedSections);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const formatContacts = (contacts: Contact[]): { title: string; data: Contact[] }[] => {
    const groupedContacts: { [key: string]: Contact[] } = {};

    contacts.forEach(contact => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
    });

    return Object.keys(groupedContacts).sort().map(letter => ({
      title: letter,
      data: groupedContacts[letter],
    }));
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.phone + index}
        renderItem={({ item }) => <ContactItem name={item.name} phone={item.phone} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
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
