import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const Safety = (props) => {
  const data = [
    {
      title: "Blind Spot Monitor With Rear Cross-Traffic Alert",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0021_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Blind Spot Monitor (BSM) * нь таны автомашины хажуу талд, дараагийн эгнээнд орж ирсэн тээврийн хэрэгслийг анхааруулах зорилготой. Харин таны машиныг ухруулж байгаа үед, Rear Cross-Traffic Alert (RCTA) * нь таны хоёр талын хажуу талаас ойрхон ирж буй тээврийн хэрэгслийг илрүүлж, түүнийг эргэх толь болон анхааруулах дуугаар танд сануулдаг.",
    },
    {
      title: "Front and Rear Parking Assist With Automatic Braking",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0022_V001_scroll.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Тухайн систем нь объект эсвэл тээврийн хэрэгсэлтэй ойртох эрсдэл илрүүлсэн үед, Toyota Crown Signia-ийн боломжит Урд ба Арын Зогсоолын Туслах Системтэй Автомат Саатал (PA w/AB) * нь дуу болон дүрсээр сануулга өгч, зарим нөхцөлд автомат саатал үйлдэж болох юм.",
    },
    {
      title: "Front Cross-Traffic Alert",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/MUL_MY24_0028_V003.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Жолоодлогын шинэ түвшний ухамсар олж мэдрээрэй. Toyota Crown Signia-ийн боломжит Урд Хөндлөн-Хөдөлгөөний Сэрэмжлүүлэг (FCTA) * нь удаан хурдтай хөдөлж байх үед хажуу талаас ойртож буй тээврийн хэрэгслүүдийг илрүүлэх зориулалттай бөгөөд энэ нь хурдны замд орох үедээ илүү итгэлтэйгээр замыг чөлөөлөх боломжийг олгоно.",
    },
    {
      title: "Hybrid Battery Warranty",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/mlp/feature-carousel/CRS_MY25_0018_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Амьдралын олон аялалд сэтгэл амар байдал. 2025 оны загваруудын бүх Toyota Hybrid Батерейны Баталгаат Хугацаа * нь эхний удаа ашиглах өдрөөс эсвэл 150,000 милийг хүрэх хүртэлх 10 жилийн хугацааг хамааруулдаг, аль нь түрүүлж ирэх вэ гэдгийг харгалзан үзнэ.",
    },
    {
      title: "ToyotaCare",
      image:
        "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/toyotacrown/mlp/horizontal-scroll/safety-convenience/TMM_FY18_0096_V003.png?fmt=jpeg&fit=crop&qlt=90&wid=600",
      description:
        "Туршлагатай замд ч таны найдвартай туслах ToyotaCare-ийн хамт шинэ Toyota Crown Signia бүхий л хэрэгцээтэй үйлчилгээг багтаасан бөгөөд энэ нь энгийн үйлдвэрт зориулагдсан үйлчилгээг 2 жилийн хугацаа буюу 25,000 милийг хүлээн зөвшөөрнө (аль нь түрүүлж ирэх вэ?) болон 24 цагийн замд туслах үйлчилгээ 2 жил, хязгааргүй милийн хамт болно.",
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

export default Safety;
