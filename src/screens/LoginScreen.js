import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import UserContext from "../contexts/UserContex";
import { backgroundColor, lightColor } from "../../Constants";

export default function ({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading modal

  const state = useContext(UserContext);

  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ бичнэ үү");
      return;
    }

    setLoading(true); // Show loading modal
    state.login(email, password);

    // Simulate a delay for smooth navigation
    setTimeout(() => {
      setLoading(false); // Hide loading modal
      navigation.navigate("CarScreen"); // Navigate to Home screen
    }, 1500); // 1.5-second delay
  };

  return (
    <View
      style={{
        justifyContent: "center",
        backgroundColor: "#e1e2e3",
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 200,
          height: 150,
          alignSelf: "center",
          marginBottom: 50,
        }}
      />

      {error && (
        <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
          {error}
        </Text>
      )}
      <MyInput
        keyboardType="email-address"
        placeholder="Та имэйл хаягаа оруулна уу"
        onChangeText={setEmail}
        value={email}
      />

      <MyInput
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword}
        value={password}
      />

      <View
        style={{
          flexDirection: "col",
          justifyContent: "space-evenly",
          marginTop: 40,
        }}
      >
        <MyButton
          title="Нэвтрэх"
          onPress={loginHandler}
          style={{ borderRadius: 20 }}
        />
        <MyButton
          title="Буцах"
          onPress={() => navigation.navigate("CarScreen")}
          style={{ borderRadius: 20 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Бүртгүүлэх")}>
          <Text
            style={{
              fontSize: 15,
              textAlign: "right",
              marginHorizontal: 30,
              fontWeight: "500",
            }}
          >
            Бүртгүүлэх
          </Text>
        </TouchableOpacity>
      </View>

      {/* Loading Modal */}
      <Modal visible={loading} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.modalText}>Түр хүлээнэ үү...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e2e3",
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
