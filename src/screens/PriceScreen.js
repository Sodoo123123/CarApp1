import React from "react";
import { View, Text, StyleSheet, Button, Image, Alert } from "react-native";
import { restApiUrl } from "../../Constants";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";

const PriceScreen = ({ route, navigation }) => {
  const { name, price, photo, content } = route.params; // Retrieve the passed parameters

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Таны сонголт </Text>
      <Image
        style={styles.car}
        source={{ uri: restApiUrl + "/upload/" + photo }}
      />
      <View
        style={{
          flexDirection: "col",
          alignItems: "left",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "600" }}>
          Машины нэр: {name}{" "}
        </Text>
        <Text style={styles.price}>Үнэ: {price} ₮</Text>
      </View>
      <MyInput placeholder="Та оорийн нэрээ оруулна уу" />
      <MyInput placeholder="Та оорийн нэрээ оруулна уу" />
      <MyInput placeholder="Та оорийн нэрээ оруулна уу" />
      <MyButton
        title="Худалдаж авах"
        onPress={() => {
          Alert.alert("Таны хүсэлтийг хүлээж авлаа");
          navigation.navigate("CarScreen");
        }}
        style={{ borderRadius: 15 }}
      />
      <MyButton
        title="Буцах"
        onPress={() => navigation.goBack()}
        style={{ borderRadius: 15 }}
      />
    </View>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
  car: {
    width: 400,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 6,
  },
});
