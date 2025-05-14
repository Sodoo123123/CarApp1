import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserContext from "../contexts/UserContex";

const DrawerContent = (props) => {
  const state = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flexDirection: "row", paddingLeft: 20, marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/images/logo.png")}
            size={50}
          />
          <View style={{ marginLeft: 15 }}>
            <Title
              style={{
                fontSize: 16,
                marginTop: 3,
                fontWeight: "bold",
                lineHeight: 23,
              }}
            >
              {state.userName ? state.userName : "Номын дэлгүүр"}
            </Title>
            <Caption style={{ lineHeight: 14 }}>
              {state.userRole ? state.userRole : "Тавтай морил"}
            </Caption>
          </View>
        </View>

        <Drawer.Section style={{ marginTop: 15 }}>
          <DrawerItem
            label="Нүүр"
            onPress={() => props.navigation.navigate("CarScreen")}
            icon={({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            )}
          />

          <DrawerItem
            label="Бүх машинууд"
            onPress={() => props.navigation.navigate("Home")}
            icon={({ color, size }) => (
              <Icon name="car" color={color} size={size} />
            )}
          />

          {state.isLoggedIn ? (
            <View>
              {state.userRole === "admin" && (
                <DrawerItem
                  onPress={() =>
                    props.navigation.navigate("Шинээр машин нэмэх")
                  }
                  label="Шинээр машин нэмэх"
                  icon={({ color, size }) => (
                    <Icon name="steering" color={color} size={size} />
                  )}
                />
              )}

              <DrawerItem
                label="Бидний тухай"
                onPress={() => props.navigation.navigate("AboutUs")}
                icon={({ color, size }) => (
                  <Icon name="train-car" color={color} size={size} />
                )}
              />
              <DrawerItem
                style={{ borderTopColor: "#f4f4f4", borderTopWidth: 1 }}
                label="Гарах"
                onPress={() => state.logout()}
                icon={({ color, size }) => (
                  <Icon name="logout-variant" color={color} size={size} />
                )}
              />
            </View>
          ) : (
            <View>
              <DrawerItem
                label="Бидний тухай"
                onPress={() => props.navigation.navigate("AboutUs")}
                icon={({ color, size }) => (
                  <Icon name="train-car" color={color} size={size} />
                )}
              />
              <DrawerItem
                label="Бүртгүүлэх"
                onPress={() => props.navigation.navigate("Бүртгүүлэх")}
                icon={({ color, size }) => (
                  <Icon name="account-plus" color={color} size={size} />
                )}
              />
              <DrawerItem
                label="НЭВТРЭХ"
                onPress={() => props.navigation.navigate("НЭВТРЭХ")}
                icon={({ color, size }) => (
                  <Icon name="login" color={color} size={size} />
                )}
              />
            </View>
          )}
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
