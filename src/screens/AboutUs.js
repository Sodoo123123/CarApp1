import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";

const aboutData = [
  {
    id: 1,
    title: "Та бол биднийг урагшлуулах хүч юм",
    content:
      "Бид таны дуу хоолойг сонсож, хариу үзүүлэн тээврийн хэрэгсэлээ бүтээдэг. Яагаад гэвэл, бидний хувьд автомашин зөвхөн таныг нэг газраас нөгөөд хүргэхээс гадна амьдралын тань урагшлахад туслах ёстой гэж итгэдэг.",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/accordion/SIE_MY22_0004_V001_1x1.png?fmt=jpg&fit=crop&resMode=bisharp&wid=700",
  },
  {
    id: 2,
    title: "Таны амьдралын хэв маягт тохируулан бүтээх",
    content:
      "Бид таны амьдралын хэв маягт нийцэж, хэрэгцээг тань урьдчилан таамаглаж, хариу үйлдэл үзүүлдэг тээврийн хэрэгслүүдийг бүтээдэг. Өнөөдөр болон ирээдүйд бидний дэвшилтэт аюулгүй байдлын технологиуд болон үйл ажиллагаанууд хэрхэн дэлхийг илүү сайн болгох талаар илүү ихийг мэдэж аваарай",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/accordion/TUN_MY22_0085_V001_1x1.png?fmt=jpg&fit=crop&resMode=bisharp&wid=700",
  },
  {
    id: 3,
    title: "Өөрчлөлтийг жолоодох, таны хүссэнээр",
    content:
      "Beyond Zero нь Toyota-ийн зорилго бөгөөд бүтээгдэхүүн, үйлчилгээ, үйл ажиллагаагаараа нүүрстөрөгчийн тэнцвэрт байдлыг давах зорилготой. Бид дэлхий дахины болон нийгмийн хувьд эерэг нөлөө үзүүлэх шинэ аргуудыг эрэлхийлж байна. Одоогоор бид бусад автомашин үйлдвэрлэгчдээс илүү олон хямд болон тэг эмисси бүхий тээврийн хэрэгсэл санал болгож байгаа бөгөөд ингэснээр хэрэглэгчид өөрсдийн нүүрстөрөгчийн ул мөрийг бууруулах хамгийн олон сонголттой болж байна. Toyota нь мөн манай гарагтай хүндэтгэлтэй хандахыг эрхэмлэж, байгаль орчны талаар гурван өөр тогтвортой байдалтай холбоотой чиглэлээр анхаарч ажиллаж байна: ус, материал, амьд төрөл зүйл. Учир нь өөрчлөлт хийх олон арга байдаг.",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/accordion/PRP_MY23_0004_V001.png?fmt=jpg&fit=crop&resMode=bisharp&wid=700",
  },
  {
    id: 4,
    title: "Аюулгүй замыг бүтээхэд туслах",
    content:
      "Аюулгүй байдал жолоочоос эхэлж болох ч, энэ нь тэнд дуусдаггүй. Бид байнга осол гарахаас сэргийлэх шинэ аргачлалуудыг шинжлэх ухаан, судалгаа хийх замаар инновацижуулж, мөн ослын үед тээврийн хэрэгслийн дотор болон гадна талд байгаа хүмүүсийг хамгаалахад туслах аргуудыг эрэлхийлж байна. Дараа нь бид судалгаа, өгөгдлөө их дээд сургуулиуд, төрийн байгууллагууд болон бусад байгууллагуудтай хуваалцаж, замын аюулгүй байдлыг бүх хүн амьдрах боломжтой болгохын төлөө ажилладаг.",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/accordion/COC_MY22_0021_V001_1x1.png?fmt=jpg&fit=crop&resMode=bisharp&wid=700",
  },
  {
    id: 5,
    title: "Буцааж өгөх",
    content:
      "Манай хэрэглэгчдэд зориулсан өргөдөл нь бид амьдарч, ажиллаж, тоглодог орон нутгуудад буцааж өгөх явдалд ч хамаарна. Бид 1991 оноос хойш АНУ-д аюулгүй байдал, боловсрол болон байгаль орчны хөтөлбөрүүдийг дэмжих зорилгоор 700 сая ам.доллароос илүү хөрөнгө оруулсан. Мөн бид үйлдвэрлэлийн мэдлэгээ ашгийн бус байгууллагууд болон орон нутгийн түншүүдтэй хуваалцаж, хүнсний банкнаас эхлээд эмнэлэг хүртэл олон төрлийн байгууллагуудад илүү олон хүнд үйлчлэх, илүү үр дүнтэй ажиллахад нь тусалдаг.",
    image:
      "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/accordion/COC_MY22_0018_V001_1x1.png?fmt=jpg&fit=crop&resMode=bisharp&wid=700",
  },
];

const AnimatedContent = ({ content, image, isOpen, onPress }) => {
  const opacity = useState(new Animated.Value(0))[0];
  const translateY = useState(new Animated.Value(10))[0];
  const rotate = useState(new Animated.Value(0))[0]; // Сумын эргэлт

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(rotate, {
      toValue: isOpen ? 180 : 0, // Сумын эргэлт
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.row}>
        <Text
          style={{
            marginRight: 20,
            fontSize: 25,
            fontWeight: "bold",
            color: "gray",
          }}
        >
          {isOpen ? "v" : ">"}
        </Text>
        <Text style={styles.subtitle}>{content.title}</Text>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View
          style={{
            opacity,
          }}
        >
          <Text style={styles.content}>{content.content}</Text>
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              borderRadius: 10,
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};

const AboutScreen = () => {
  const [openedItems, setOpenedItems] = useState({});

  const handlePress = (id) => {
    setOpenedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/brand-page/welcome/Brand_GR_Welcome_Mat_Desktop.png?fmt=jpeg&fit=crop&wid=1920",
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Боломжит бүхнээс урам зориг авсан</Text>
        <Text style={styles.description}>
          Бидний хүсэл тэмүүлэл нь хүмүүст өөрсдийн ертөнцөө чөлөөтэй нээх болон
          бүрэн чадвараа хүрэх боломжийг олгоход оршдог. Бидний найдвартай
          тээврийн хэрэгсэл болон шинэлэг хөдөлгөөний шийдлүүдээр бие махбодын
          хувьд, урам зориг өгөх дизайн, сэтгэлд ойр туршлагаар сэтгэлзүйн хувьд
          хүмүүст туслах замаар энэ бүхнийг хүргэдэг. Бидний тасралтгүй хөгжиж
          буй тусламж үзүүлэх хүсэл хэзээ ч зогсохгүй.
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop: 25,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          TOYOTA ФИЛОСОФИ
        </Text>

        {aboutData.map((item) => (
          <View key={item.id} style={{ marginBottom: 20 }}>
            <AnimatedContent
              content={item}
              image={item.image}
              isOpen={openedItems[item.id]}
              onPress={() => handlePress(item.id)}
            />
          </View>
        ))}

        <Text style={styles.subtitle}>📞 Холбоо барих</Text>
        <Text style={{ fontSize: 14, lineHeight: 30 }}>
          📧 support@toyotashop.mn{"\n"}
          ☎️ +976 88664852{"\n"}
          📍 Улаанбаатар хот, СБД, 1-р хороо, Toyota төв байр
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e2e3",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#1a1a1a",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
  },
  content: {
    fontSize: 12,
    lineHeight: 20,
    color: "#333",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AboutScreen;
