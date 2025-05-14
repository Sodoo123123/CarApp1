import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <Feather style={css.searchIcon} name="search" color="#535C68" />
      <TextInput
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Хайх"
        placeholderTextColor="#777E8B"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  searchPanel: {
    top: 15,
    height: 40,
    backgroundColor: "#DAE0E2",
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: "row",
    marginBottom: 20,
  },
  searchText: {
    color: "#777E8B",
    fontSize: 13,
    flex: 1,
  },
  searchIcon: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
