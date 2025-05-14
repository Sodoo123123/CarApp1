import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  ScrollView,
  Button,
  Image,
  Linking,
} from "react-native";
import { mainColor, lightColor, restApiUrl } from "../../Constants";
import * as ImagePicker from "expo-image-picker";
import * as Animatable from "react-native-animatable";
import FormText from "../components/FormText";
import FormSwitch from "../components/FormSwitch";
import FormRadioButtons from "../components/FormRadioButtons";
import useCategory from "../hooks/useCategory";
import Spinner from "../components/Spinner";
import MyButton from "../components/MyButton";
import axios from "axios";

const BookAdd = (props) => {
  const [uploadTotal, setUploadTotal] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [categories, errorMessage, loading] = useCategory();
  const [book, setBook] = useState({
    name: "",
    photo: "photo.jpg",
    author: "",
    rating: 4.0,
    balance: 6,
    price: "",
    content: "",
    bestseller: true,
    category: null,
    available: ["old"],
  });

  const [serverError, setServerError] = useState(null);
  const [saving, setSaving] = useState(false);

  const handleUploadComplete = (event, bookId) => {
    console.log("Upload completed!");
    setUploadProgress(0);
    setUploadTotal(0);

    // Navigate back to Home and trigger refresh
    props.navigation.navigate("Home", { refresh: true });
  };

  const handleUploadProgress = (event) => {
    if (uploadTotal === 0) setUploadTotal(event.total);

    setUploadProgress((uploadProgress) => {
      console.log("Upload total : " + uploadTotal);
      console.log("Upload progress: " + uploadProgress);
      return Math.round((event.loaded * 100) / event.total);
    });
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Анхаар!",
          "Уучлаарай, та утаснаас зураг сонгох эрхийг зөвшөөрч байж зураг оруулах боломжтой. Та утасныхаа тохиргооны цонхноос энэ апп-д зураг үзэх бичих эрхийг нээж өгнө үү.",
          [
            {
              text: "Тохиргоог нээх",
            },
            { text: "Ok", onPress: () => {} },
          ]
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    // Request permissions to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Анхаар!",
        "Уучлаарай, та утаснаас зураг сонгох эрхийг зөвшөөрч байж зураг оруулах боломжтой. Та утасныхаа тохиргооны цонхноос энэ апп-д зураг үзэх бичих эрхийг нээж өгнө үү.",
        [
          {
            text: "Тохиргоог нээх",
            onPress: () => Linking.openSettings(),
          },
          { text: "Ойлголоо", onPress: () => {} },
        ]
      );
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Check if the user canceled the picker
    if (!result.canceled) {
      setBook({ ...book, photo: result.assets[0].uri });
    } else {
      Alert.alert("Анхаар!", "Та машины зургийг сонгоогүй байна.");
    }
  };

  const sendBookToServer = () => {
    // Validate required fields
    if (!book.name || book.name.length < 5 || book.name.length > 20) {
      Alert.alert("Анхаар!", "Машины нэрийг зөв оруулна уу (5-20 тэмдэгт)!");
      return;
    }

    if (!book.author || book.author.length < 5 || book.author.length > 15) {
      Alert.alert("Анхаар!", "Mark-ийн нэрийг зөв оруулна уу (5-15 тэмдэгт)!");
      return;
    }

    if (!book.price || parseInt(book.price) < 1000) {
      Alert.alert("Анхаар!", "Машины үнэ 1000 төгрөгөөс дээш байх ёстой!");
      return;
    }

    if (
      !book.content ||
      book.content.length < 10 ||
      book.content.length > 1000
    ) {
      Alert.alert("Анхаар!", "Машины тайлбар 10-1000 тэмдэгтээс тогтоно!");
      return;
    }

    if (!book.category) {
      Alert.alert("Анхаар!", "Та машины категорийг сонгоно уу!");
      return;
    }

    if (!book.photo) {
      Alert.alert("Анхаар!", "Та машины зургийг сонгоно уу!");
      return;
    }

    setSaving(true);

    // Process the photo
    const fileUri = book.photo;
    const fileExt = fileUri.substring(fileUri.lastIndexOf(".") + 1);
    const photoName = `photo__${new Date().getTime()}.${fileExt}`;
    const bookData = { ...book, photo: photoName };

    // Send book data to the server
    axios
      .post(`${restApiUrl}/api/v1/books`, bookData)
      .then((result) => {
        const newBook = result.data.data;

        // Upload the photo
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("load", (event) =>
          handleUploadComplete(event, newBook._id)
        );
        xhr.upload.addEventListener("progress", handleUploadProgress);

        const data = new FormData();
        data.append("file", {
          uri: fileUri,
          type: `image/${fileExt}`,
          name: photoName,
        });

        xhr.open(
          "PUT",
          `${restApiUrl}/api/v1/books/${newBook._id}/upload-photo`
        );
        xhr.send(data);
      })
      .catch((err) => {
        if (err.response) {
          setServerError(err.response.data.error.message);
          Alert.alert("Алдаа!", err.response.data.error.message);
        } else {
          setServerError(err.message);
          Alert.alert("Алдаа!", err.message);
        }
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const [error, setError] = useState({
    name: false,
    author: false,
    price: false,
    content: false,
  });

  const checkName = (text) => {
    setError({
      ...error,
      name: text.length < 5 || text.length > 20,
    });

    setBook({
      ...book,
      name: text,
    });
  };

  const checkPrice = (text) => {
    setError({
      ...error,
      price: text < 1000,
    });

    setBook({
      ...book,
      price: text,
    });
  };

  const checkAuthor = (text) => {
    setError({
      ...error,
      author: text.length < 5 || text.length > 15,
    });

    setBook({
      ...book,
      author: text,
    });
  };

  const checkContent = (text) => {
    setError({
      ...error,
      content: text.length < 5 || text.length > 1000,
    });

    setBook({
      ...book,
      content: text,
    });
  };

  const toggleBestseller = () => {
    setBook({
      ...book,
      bestseller: !book.bestseller,
    });
  };

  if (uploadTotal > 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 16 }}>
          Түр хүлээнэ үү. Зургийг илгээж байна...
        </Text>

        <View
          style={{
            height: 40,
            backgroundColor: "gray",
            width: 200,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              height: 40,
              backgroundColor: "#cdd1e4",
              width: uploadProgress,
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white", flex: 1, marginTop: 15 }}>
              {uploadProgress / 2}%
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e1e2e3" }}>
      <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#e1e2e3",
        }}
      >
        <Text style={{ fontSize: 30, color: "black" }}>Шинээр машин нэмэх</Text>
        <Text style={{ fontSize: 16, color: "black", marginTop: 10 }}>
          Та шинэ машины мэдээллээ оруулна уу
        </Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        duration={800}
        style={{
          flex: 5,
          paddingHorizontal: 20,
          paddingVertical: 30,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {loading || saving ? (
          <Spinner />
        ) : (
          <ScrollView>
            {serverError &&
              Alert.alert("Анхаар", serverError, [
                {
                  text: "Ойлголоо",
                  onPress: () => setServerError(null),
                },
              ])}
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {book.photo && (
                <Image
                  source={{ uri: book.photo }}
                  style={{ width: 200, height: 100, borderRadius: 10 }}
                />
              )}
              <MyButton
                title="Машины зургийг сонгоно уу"
                onPress={pickImage}
                style={{
                  borderRadius: 20,
                  width: 300,
                }}
              />
            </View>
            <FormText
              label="Машины нэрийг оруулна уу"
              placeholder="Машины нэр"
              icon="car"
              value={book.name}
              onChangeText={checkName}
              errorText="Номын нэрийн урт 4-20 тэмдэгтээс тогтоно."
              errorShow={error.name}
            />

            <FormText
              label="Машины маркийг оруулна уу"
              placeholder="Машины марк"
              icon="car-sports"
              value={book.author}
              onChangeText={checkAuthor}
              errorText="Машины нэрийн урт 5 - 15 үсгээс тогтоно."
              errorShow={error.author}
            />

            <FormText
              label="Машины үнийг оруулна уу"
              keyboardType="numeric"
              placeholder="Машины үнэ"
              icon="gas-station"
              value={book.price}
              onChangeText={checkPrice}
              errorText="Машины үнэ 1000000 төгрөгөөс дээш байна."
              errorShow={error.price}
            />

            <FormText
              label="Машины тайлбарыг оруулна уу"
              placeholder="Машины тайлбар 1000 тэмдэгтээс хэтрэхгүй"
              style={{ fontSize: 14 }}
              icon="car-hatchback"
              multiline
              numberOfLines={10}
              value={book.content}
              onChangeText={checkContent}
              errorText="Машины тайлбар 10 - 1000 тэмдэгтээс тогтоно."
              errorShow={error.content}
            />

            <FormRadioButtons
              label="Машины категори :"
              icon="tool"
              data={categories.map((el) => el.name)}
              value={book.category}
              values={categories.map((el) => el.id)}
              onValueChange={(value, index) => {
                console.log(value);
                setBook({ ...book, category: value });
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <MyButton
                title="Бүртгэх"
                onPress={sendBookToServer}
                style={{ borderRadius: 20, marginBottom: 60, marginTop: 20 }}
              />
              <MyButton
                title="Буцах"
                onPress={() => props.navigation.goBack()}
              />
            </View>
          </ScrollView>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default BookAdd;

const styles = StyleSheet.create({});
