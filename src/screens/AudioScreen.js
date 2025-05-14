import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Video } from "expo-av"; // Correctly import Video from expo-av

const AudioScreen = () => {
  const data = [
    {
      title: "12.3-in. Toyota Audio Multimedia Touchscreen",
      image:
        "https://www.toyota.com/content/dam/toyota/vehicles/2025/crownsignia/mlp/owners-video/CRS_MY25_LCH_SFVAudio_TCOM_900x600.mp4",
      description:
        "Toyota Crown Signia-ийн стандарт 12.3 инчийн Toyota Audio Multimedia дэлгэц нь харах, тэмтрэх, бүр хэлний таних системтэй холбогдсон харилцааг тань дээшлүүлж, Сайн уу, Toyota гэх үгээр системийг идэвхжүүлэх боломжийг олгодог. Тоглоом сонсохоос эхлээд очих газраа олоход болон бусад олон зүйлс хийхэд—таныг бүх адал явдлынхаа турш холбоотой байлгаарай.",
    },
    {
      title: "JBL® Premium Audio",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0026_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Бүх жолоодлогынхаа саундтрэкээр таашаал аваарай. Toyota Crown Signia-ийн боломжит 800 ватттай JBL® * Premium Audio систем нь 11 чанга яригчтай бөгөөд сабвуфер бүхий систем нь гайхалтай дууг бий болгож, дүрсэлсэн туршлагыг бий болгодог.",
    },
    {
      title: "Wireless Apple CarPlay®",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0017_V003.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Таны танил интерфэйсийг авчраарай. Toyota Crown Signia-ийн утасгүй Apple CarPlay® нийцтэй байдлаар та өөрийн iPhone утсаа мультимедиа системтэй холбож ашиглаж болно.",
    },
    {
      title: "Wireless Android Auto™",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0027_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Android™ утсаа холбож, Wireless Android Auto™ ашиглан замын мэдэгдэл, дуудлага, хөгжим зэрэг олон боломжийг ашиглаарай.",
    },
    {
      title: "SiriusXM® 3-Month Trial",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0017_V002.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "SiriusXM® 3 сарын туршилтаар 425+ суваг бүхий сурталчилгаагүй хөгжим, подкаст болон бусад контентыг хүлээн аваарай.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.featureContainer}>
          {item.image.includes(".mp4") ? (
            <Video
              source={{ uri: item.image }} // If the image is a video link, use Video component
              style={styles.featureImage}
              shouldPlay
              isLooping
              useNativeControls
              resizeMode="contain"
            />
          ) : (
            <Image source={{ uri: item.image }} style={styles.featureImage} /> // Otherwise render image
          )}
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
