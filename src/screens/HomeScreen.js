import React, { useState, useLayoutEffect, useContext } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Search from "../components/Search";
import useCategory from "../hooks/useCategory";
import CategoryCarList from "../components/CategoryCarList";
import Spinner from "../components/Spinner";
import MyHeaderButton from "../components/MyHeaderButton";
import UserContext from "../contexts/UserContex";
import PriceScreen from "./PriceScreen";

const HomeScreen = ({ navigation, route }) => {
  const [localSearchText, setLocalSearchText] = useState("");
  const [serverSearchText, setServerSearchText] = useState("");
  const [categories, errorMessage, loading] = useCategory();
  const [refresh, setRefresh] = useState(false);

  const state = useContext(UserContext);

  if (route.params && route.params.deletedBook) {
    Alert.alert(route.params.deletedBook.name + " нэртэй машиныг устгалаа!");
    delete route.params.deletedBook;
    setRefresh(true);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item title="Цэс" onPress={() => navigation.toggleDrawer()} />
        </HeaderButtons>
      ),
      title: "Toyota Машин худалдаа",
    });
  }, [navigation, localSearchText, state.userName]);

  const searchBookFromServer = () => {
    console.log(`Сэрвэрээс ${localSearchText} утгаар хайж эхэллээ...`);

    setServerSearchText(localSearchText);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e1e2e3",
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <View>
            {errorMessage && (
              <Text style={{ marginHorizontal: 20, color: "red" }}>
                {errorMessage}
              </Text>
            )}
            <ScrollView>
              <Search
                value={localSearchText}
                onValueChange={setLocalSearchText}
                onFinishEnter={searchBookFromServer}
              />
              {categories.map((category) => (
                <CategoryCarList
                  navigation={navigation}
                  refreshCategory={refresh}
                  setRefresh={setRefresh}
                  searchLocalValue={localSearchText}
                  searchServerValue={serverSearchText}
                  key={category._id}
                  style={{ marginVertical: 10 }}
                  data={category}
                />
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
