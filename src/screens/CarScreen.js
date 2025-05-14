import React, { useRef, useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import MyButton from "../components/MyButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const videoSources = [
  "https://www.toyota.com/content/dam/toyota/vehicles/2025/priuspluginhybrid/mlp/welcomemat/PRP_MY25_EV_Range_Performance_TCOM_TDRDesktop1920x796_TYCK2950000H.mp4?wid=1920",
  "https://www.toyota.com/content/dam/toyota/vehicles/2025/crownsignia/mlp/owners-video/CRS_MY25_LCH_WelcomeMat_TCOM_Desktop_1920x79.mp4?wid=1920",
  "https://www.toyota.com/content/dam/toyota/vehicles/2025/rav4/mlp/welcome-mat/RAV4_MY25_desktop.mp4?wid=1920",
];
const tools = [
  { label: "Сонголт & үнэ", icon: "hammer-wrench", navigateTo: "AboutUs" },
  { label: "Нөөцөөс хайх", icon: "magnify", navigateTo: "AboutUs" },
  { label: "Онцгой санал", icon: "tag", navigateTo: "AboutUs" },
  { label: "Байршил", icon: "map-marker", navigateTo: "AboutUs" },
];

const { width } = Dimensions.get("window");

const CarScreen = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const players = videoSources.map((uri) =>
    useVideoPlayer({ uri }, (player) => {
      player.loop = true;
      player.play();
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % videoSources.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderItem = ({ index }) => (
    <VideoView
      player={players[index]}
      style={styles.video}
      resizeMode="cover"
      allowsFullscreen={true}
      allowsPictureInPicture={false}
      nativeControls={false}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          ref={flatListRef}
          data={videoSources}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={{ height: 250 }}
        />

        {/* Pagination */}
        <View style={styles.pagination}>
          {videoSources.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        {/* Текст контент */}
        <View style={{ padding: 20, bottom: 20 }}>
          <Text style={styles.title}>
            Амьдралын хамгийн агуу дурсамжуудыг бүтээ.
          </Text>
          <Text style={styles.subtitle}>
            Онцгой хийц, уян хатан багтаамж болон найман хүний суудалтай цэлгэр
            салоноороо Highlander таны амьдралын хамгийн том мөчүүд болон
            түүнтэй хамт тохиох бүхнийг давахад бэлэн.
          </Text>
        </View>
        {/* Зураг ба товч */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.allcars}
            source={{
              uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/story/MUL_MY23_0023_V006_4x3_771Dj68mUogIwIiZ.png?fmt=jpeg&qlt=90&dpr=on,3&wid=1024",
            }}
          />
          <MyButton
            title="Бүх машинуудыг харах"
            style={styles.explore}
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
        {/* онцлох хэрэгслүүд */}
        <View>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 14,
              alignSelf: "center",
              borderBottomWidth: 1, // Бүдгэрсэн зураас
              borderBottomColor: "gray", // Зураасны өнгө
              paddingBottom: 5,
              marginTop: 20,
            }}
          >
            Онцлох хэрэгслүүд
          </Text>
          <View style={styles.grid}>
            {tools.map((tool, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => props.navigation.navigate(tool.navigateTo)}
              >
                <Icon name={tool.icon} size={30} color="#4b4b4b" />
                <Text style={styles.label}>{tool.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Онцлог шинжүүд */}
        <View style={{ marginVertical: 20, padding: 20 }}>
          <Text
            style={{
              fontWeight: "300",
              fontSize: 14,
              alignSelf: "center",
              borderBottomWidth: 1, // Бүдгэрсэн зураас
              borderBottomColor: "gray", // Зураасны өнгө
              paddingBottom: 5,
              marginBottom: 20,
            }}
          >
            Бусад онцлог шинжүүд
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 25, textAlign: "center" }}
          >
            Таны хэмнэлд тохирсон технологи
          </Text>
          {[
            {
              title: "Аюулгүй байдал ба Тав тух",
              uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/flex/CRS_MY25_0021_V001.png?fmt=jpeg&fit=crop&wid=1920",
              navigateTo: "SafetyScreen",
            },
            {
              title: "Аудио мультимедиа",
              uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/flex/CRS_MY25_0017_V003.png?fmt=jpeg&fit=crop&wid=1920",
              navigateTo: "AudioScreen",
            },
            {
              title: "Toyota аюулгүй байдал™3.0",
              uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/toyota-safety-sense/CRS_MY25_0020_V001_v1.png?fmt=jpeg&fit=crop&wid=1920",
              navigateTo: "SafetySenseScreen",
            },
            {
              title: "Тохиргоо холболт үйлчилгээ",
              uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/toyotacrown/mlp/flex/CRW_MY25_0007_V001.png?fmt=jpeg&fit=crop&wid=1920",
              navigateTo: "ConnectivityScreen",
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => props.navigation.navigate(item.navigateTo)}
            >
              <Image source={{ uri: item.uri }} style={styles.featureImage} />
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CarScreen;

const styles = StyleSheet.create({
  video: {
    width: width,
    height: 250,
    bottom: 40,
  },
  pagination: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  dot: {
    width: 30,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#888",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 30,
    backgroundColor: "#e1e2e3",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    paddingBottom: 5,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 13,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginTop: 10,
  },
  allcars: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  explore: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "#4b4b4b",
    borderRadius: 20,
    width: 280,
  },
  featureImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    top: 50,
    alignSelf: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    width: "40%",
    margin: 10,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  icon: {
    fontSize: 20,
    marginBottom: 10,
    color: "black",
  },
  label: {
    fontSize: 14,
    textAlign: "center",
  },
});
