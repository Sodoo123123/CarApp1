import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Car from "./Car";
import useBooks from "../hooks/useBooks";
import Spinner from "./Spinner";

const CategoryBookList = ({
  data,
  style,
  searchLocalValue,
  searchServerValue,
  refreshCategory,
  setRefresh,
  navigation,
}) => {
  const [books, errorMessage, searchBook, loading] = useBooks(
    data._id,
    searchServerValue,
    refreshCategory,
    setRefresh
  );

  const filteredBooks = books.filter((el) =>
    el.name.toLowerCase().includes(searchLocalValue.toLowerCase())
  );
  const handleBookClick = (book) => {
    navigation.navigate("BookDetail", { id: book._id });
  };

  return (
    <View style={{ ...style }}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      {errorMessage && (
        <Text style={{ marginLeft: 15, color: "red" }}>{errorMessage}</Text>
      )}
      {loading && <Spinner showText={false} />}
      <FlatList
        navigation={navigation}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredBooks}
        keyExtractor={(book) => book.name}
        renderItem={({ item, index }) => <Car data={item} />}
      />
    </View>
  );
};

export default CategoryBookList;

const styles = StyleSheet.create({
  name: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "left",
  },
  description: {
    marginLeft: 15,
    fontSize: 10,
    alignSelf: "center",
  },
});
