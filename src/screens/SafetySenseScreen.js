import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Video } from "expo-av"; // Correctly import Video from expo-av

const AudioScreen = () => {
  const data = [
    {
      title: "Pre-Collision System With Pedestrian Detection",
      video:
        "https://www.toyota.com/content/dam/toyota/vehicles/toyota-safety-sense/suv/3-0/horizontal-scroll/TSS_Full_Speed_Dynamic_Radar_Cruise_Control_New_ENG_10_TYSB1366000H_SUV_1080x720.mp4",
      description:
        "PCS w/PD * can alert you to potential collisions and may automatically brake.",
    },
    {
      title: "Full-Speed Range Dynamic Radar Cruise Control",
      video:
        "https://www.toyota.com/content/dam/toyota/vehicles/toyota-safety-sense/suv/3-0/horizontal-scroll/TSS_Full_Speed_Dynamic_Radar_Cruise_Control_New_ENG_10_TYSB1366000H_SUV_1080x720.mp4",
      description:
        "DRCC * helps maintain a preset distance from the vehicle ahead of you, from highway speeds down to a full stop.",
    },
    {
      title: "Lane Departure Alert With Steering Assist",
      video:
        "https://www.toyota.com/content/dam/toyota/vehicles/toyota-safety-sense/suv/3-0/horizontal-scroll/TSS_Lane_Departure_Alert_with_SA_New_ENG_10_TYSB1369000H_SUV_1080x720.mp4",
      description:
        "LDA w/SA * may alert you to inadvertent lane departures and make minor steering corrections to help keep you in your lane.",
    },
    {
      title: "Lane Tracing Assist",
      video:
        "https://www.toyota.com/content/dam/toyota/vehicles/toyota-safety-sense/suv/3-0/horizontal-scroll/TSS_Lane_Tracing_Assist_New_ENG_10_TYSB1367000H_SUV_1080x720.mp4",
      description:
        "LTA * helps you center the vehicle within its lane while DRCC * is active.",
    },
    {
      title: "Road Sign Assist",
      video:
        "https://www.toyota.com/content/dam/toyota/vehicles/toyota-safety-sense/suv/3-0/horizontal-scroll/TSS_Road_Sign_Assist_New_ENG_10_TYSB1370000H_SUV_1080x720.mp4",
      description:
        "RSA * can recognize certain road signs and display them to you inside the vehicle.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.featureContainer}>
          <Video
            source={{ uri: item.video }} // If the image is a video link, use Video component
            style={styles.featureImage}
            isLooping
            useNativeControls
            resizeMode="contain"
          />
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

export default AudioScreen;
