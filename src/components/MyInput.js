import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function CustomInput(props) {
  return (
    <View style={[styles.inputContainer, props.containerStyle]}>
      <TextInput
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
        style={[styles.inputField, props.style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#4b4b4b",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 375,
  },
  inputField: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#cdd1e4",
    borderRadius: 12,
  },
});
