import React, { useContext } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import DrawerContent from "../components/DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import CarDetailScreen from "../screens/CarDetailScreen";
import UserContex from "../contexts/UserContex";
import CarAdd from "../screens/CarAdd";
import PriceScreen from "../screens/PriceScreen";
import CarScreen from "../screens/CarScreen";
import AboutUs from "../screens/AboutUs";
import SafetyScreen from "../screens/SafetyScreen";
import SafetySenseScreen from "../screens/SafetySenseScreen";
import ConnectivityScreen from "../screens/ConnectivityScreen";
import AudioScreen from "../screens/AudioScreen";
const Drawer = createDrawerNavigator();

export default () => {
  const state = useContext(UserContex);

  if (state.isLoading === true) {
    return <SplashScreen />;
  }

  return (
    <Drawer.Navigator
      initialRouteName={state.isLoggedIn ? "CarScreen" : "НЭВТРЭХ"}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Худалдаж авах",
        }}
      />
      <Drawer.Screen
        name="Price"
        component={PriceScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Худалдаж авах",
        }}
      />
      <Drawer.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Нүүр хэсэг",
        }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Бидний тухай",
        }}
      />
      <Drawer.Screen
        name="SafetyScreen"
        component={SafetyScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Аюулгүй байдал ба Тав тух",
        }}
      />
      <Drawer.Screen
        name="AudioScreen"
        component={AudioScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Аудио мультимедиа",
        }}
      />

      <Drawer.Screen
        name="SafetySenseScreen"
        component={SafetySenseScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Toyota аюулгүй байдал™3.0",
        }}
      />
      <Drawer.Screen
        name="ConnectivityScreen"
        component={ConnectivityScreen}
        options={{
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#000",
          headerTitleAlign: "center",
          title: "Тохиргоо холболт үйлчилгээ",
        }}
      />

      <Drawer.Screen
        name="Detail"
        component={CarDetailScreen}
        options={() => ({
          headerStyle: {
            backgroundColor: "#e1e2e3",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          title: "Машин худалдаа",
          headerBackTitleVisible: true,
          headerBackTitle: "Буцах",
          headerTruncatedBackTitle: "",
        })}
      />
      {state.isLoggedIn ? (
        <>
          {state.userRole === "admin" && (
            <Drawer.Screen name="Шинээр машин нэмэх" component={CarAdd} />
          )}
        </>
      ) : (
        <>
          <Drawer.Screen
            name="Бүртгүүлэх"
            options={{
              headerStyle: {
                backgroundColor: "#e1e2e3",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: "#000",
              headerTitleAlign: "center",
            }}
            component={SignupScreen}
          />
          <Drawer.Screen
            name="НЭВТРЭХ"
            options={{
              headerStyle: {
                backgroundColor: "#e1e2e3",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              headerTintColor: "#000",
              headerTitleAlign: "center",
            }}
            component={LoginScreen}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
