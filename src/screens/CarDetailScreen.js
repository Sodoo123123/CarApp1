import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import useBook from "../hooks/useBook";
import UserContex from "../contexts/UserContex";
import { restApiUrl } from "../../Constants";
import MyButton from "../components/MyButton";
const thousandify = require("thousandify");

import * as Animatable from "react-native-animatable";

const BookDetailScreen = (props) => {
  const { id } = props.route.params;
  const [book, error, deleteBook] = useBook(id);
  const state = useContext(UserContex);
  useEffect(() => {
    console.log("Book ID:", props.route.params.id);
  }, [props.route.params]);

  const deleteOneBook = () => {
    Alert.alert("Анхаар!", "Та энэ машиныг устгахдаа итгэлтэй байна уу?", [
      {
        text: "Татгалзах",
        onPress: () => {},
      },
      {
        text: "Тийм, устга!",
        onPress: () => {
          deleteBook(book._id)
            .then((result) => {
              props.navigation.navigate("Home", {
                deletedBook: result.data.data,
              });
            })
            .catch((err) => {
              Alert.alert(err.response.data.error.message);
            });
        },
      },
    ]);
  };
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Feather
          size={25}
          style={{ marginRight: 20 }}
          name="menu"
          color="#e1e2e3"
          onPress={() => props.navigation.toggleDrawer()}
        />
      ),
    });
  }, [props.navigation]);
  if (error) {
    return (
      <Text style={{ color: "red", margin: 30 }}>Алдаа гарлаа! {error}</Text>
    );
  }
  if (!book) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <Animatable.View animation="fadeInUpBig" duration={800}>
        <View style={styles.container}>
          <Image
            style={styles.car}
            source={{ uri: restApiUrl + "/upload/" + book.photo }}
          />

          <View style={styles.infoContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{book.name}</Text>
              <Text style={styles.price}>{thousandify(book.price)} ₮</Text>
            </View>
            <View>
              <Text style={styles.about}>Энэ машины тухай</Text>
              <Text style={styles.aboutText}>{book.content}</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://www.toyota.com")}
              >
                <Text
                  style={[
                    styles.link,
                    { color: "#6C63FF", fontWeight: "bold" },
                  ]}
                >
                  Та дэлгэрэнгүй мэдээлэл авахыг хүсвэл энд дарна уу
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <MyButton
                onPress={() =>
                  props.navigation.navigate("Price", {
                    name: book.name, // Pass the car's name
                    price: book.price, // Pass the car's price
                    photo: book.photo,
                  })
                }
                title="Худалдаж авах"
                style={styles.button1}
              />
              {state.userRole === "admin" && (
                <View style={{ marginBottom: 100 }}>
                  <MyButton
                    onPress={deleteOneBook}
                    title="Энэ машиныг устгах"
                    style={styles.button1}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
  },
  car: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 30,
    borderRadius: 30,
    height: 600,
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    marginTop: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: { fontSize: 20, color: "red", fontWeight: "600", marginVertical: 4 },
  year: { fontSize: 16, color: "#555" },
  button: {
    marginTop: 50,
  },
  about: {
    fontWeight: "bold",
    marginTop: 20,
  },
  button1: {
    borderRadius: 50,
    width: 300,
  },
  aboutText: {
    marginTop: 10,
  },
});
