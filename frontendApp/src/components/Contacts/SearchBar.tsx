import React from "react"
import { TextInput, StyleSheet } from "react-native"

const SearchBar = () => {
    return (
        <TextInput
        placeholder="Buscá por nombre o número"
        style={styles.searchInput}
      />
    )
}

const styles = StyleSheet.create({
    searchInput: {
      height: 40,
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 15,
      marginBottom: 15,
    },
  });
  
export default SearchBar;
