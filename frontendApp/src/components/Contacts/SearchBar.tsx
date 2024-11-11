import React from "react";
import { TextInput } from "react-native";
import { searchBarStyles as styles } from "./styles";

const SearchBar = () => {
  return (
    <TextInput
      placeholder="Buscá por nombre o número"
      style={styles.searchInput}
    />
  );
};

export default SearchBar;
