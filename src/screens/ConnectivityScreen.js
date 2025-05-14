import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const ConnectivityScreen = () => {
  const data = [
    {
      titleL: "Remote Connect With Available Digital Key",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/TMM_FY22_0079_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Toyota Crown Signia is up to speed with the latest tech. With an active Remote Connect trial or subscription, * * you can start the engine, lock/unlock doors, and locate your vehicle using the Toyota app * through your compatible smartphone or smartwatch. 1-year trial of Remote Connect included. 4G network dependent.",
    },
    {
      title: "Wi-Fi Connect",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0020_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Turn Toyota Crown Signia into a hotspot. With an active Wi-Fi Connect trial or subscription, * * you can easily connect up to five devices. And, depending on your existing mobile provider, you can add the Wi-Fi Connect subscription to your current mobile plan. We’ll even include a 1-month or 3-GB trial to get you started. 4G network dependent.",
    },
    {
      title: "Safety Connect®",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRW_MY23_0024_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Connect to our 24/7 response center in case of an accident or emergency with the press of a button. * You also get 24/7 Roadside Assistance * and Stolen Vehicle Locator * to give you peace of mind that help is on the way. Up to 10-year trial. * 4G network dependent.",
    },
    {
      title: "Service Connect",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/SCR_FY24_0003_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Stay up to date with your Toyota Crown Signia’s information. With the up to 10-year trial of Service Connect, * * you’re provided with data such as mileage, fuel level and service history. Enable maintenance alerts and receive maintenance reminders that can also be sent to your preferred dealer for extra convenience. 4G network dependent.",
    },
    {
      title: "Drive Connect",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/SCR_MY23_0016_V002_new.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "With a Drive Connect trial or subscription, * * the Cloud Navigation * and Intelligent Assistant * features help you find where you need to be, while Destination Assist * allows you to talk to a live agent while they help you find your destination’s coordinates and offer directions on how to get there. 1-year trial subscription included on select grades. 4G network dependent.",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.featureContainer}>
          <Image source={{ uri: item.image }} style={styles.featureImage} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e1e2e3",
  },
  featureContainer: {
    marginBottom: 30,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  featureImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ConnectivityScreen;
