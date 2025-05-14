import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
const thousandify = require("thousandify");
import { useNavigation } from "@react-navigation/native";
import { restApiUrl } from "../../Constants";

const Book = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: data.id })}
      style={{
        marginLeft: 15,
        marginVertical: 15,
        width: 280,
      }}
    >
      <View style={{ backgroundColor: "#ebe8e8", borderRadius: 20 }}>
        <Image
          style={styles.car}
          source={{ uri: restApiUrl + "/upload/" + data.photo }}
        />
        <View style={{ padding: 5 }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{ marginLeft: 10, top: 5, fontSize: 10, fontWeight: "bold" }}
          >
            {data.author}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 10, fontSize: 15, fontWeight: "bold" }}>
              {thousandify(data.price)}₮
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({
  car: {
    width: 280,
    height: 250,
    marginRight: 15,
    borderRadius: 15,
  },
});
