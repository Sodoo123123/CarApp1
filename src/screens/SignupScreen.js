import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../contexts/UserContex";
import { backgroundColor } from "../../Constants";

export default function ({ route, navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);

    if (name.length === 0) {
      Alert.alert("Та нэрэээ бичнэ үү");
      return;
    }

    if (password1 !== password2) {
      Alert.alert("Нууц үгнүүд хоорондоо таарахгүй байна!");
      return;
    }

    state.signUp(name, email, password1);
    setTimeout(() => {
      // Hide loading modal
      navigation.navigate("CarScreen"); // Navigate to Home screen
    }, 1500); // 1.5-second delay
  };

  return (
    <View
      style={{ justifyContent: "center", backgroundColor: "#e1e2e3", flex: 1 }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 200,
          height: 150,
          alignSelf: "center",
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginBottom: 30,
          color: "black",
          fontWeight: "bold",
        }}
      >
        Шинээр бүртгүүлэх
      </Text>

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}

      <MyInput
        value={name}
        placeholder="Та нэрээ оруулна уу"
        onChangeText={setName}
      />

      <MyInput
        value={email}
        keyboardType="email-address"
        placeholder="Та имэйл хаягаа оруулна уу"
        onChangeText={setEmail}
      />

      <MyInput
        value={password1}
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword1}
      />

      <MyInput
        value={password2}
        secureTextEntry={true}
        placeholder="Нууц үгээ давтан оруулна уу"
        onChangeText={setPassword2}
      />

      <View style={{ flexDirection: "col", justifyContent: "space-evenly" }}>
        <MyButton
          title="Бүртгүүлэх"
          onPress={signupHandler}
          style={{ borderRadius: 20 }}
        />
        <MyButton
          title="Буцах"
          onPress={() => navigation.navigate("НЭВТРЭХ")}
          style={{ borderRadius: 20 }}
        />
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
