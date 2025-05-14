import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FancyButton({ title, onPress, style }) {
  return (
    <View style={css.container}>
      <TouchableOpacity
        style={[css.button, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={css.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  button: {
    width: 375,
    height: 40,
    backgroundColor: "#4b4b4b",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#cdd1e4",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
