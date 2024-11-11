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
import api from "../../../api";
import { Contact } from "../../interfaces";
import { contactListStyles as styles } from "./styles";
import { initialsFormat } from "../../utils";

type ContactItemProps = {
  name: string;
  phone: string;
};

const handleStorage = async (object: ContactItemProps) => {
  await AsyncStorage.setItem("user", JSON.stringify(object));
}

const ContactItem: React.FC<ContactItemProps> = ({ name, phone }) => {
  
  const initials = initialsFormat(name);

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



export default ContactList;
