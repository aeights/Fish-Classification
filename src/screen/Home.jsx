import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  primary,
  secondary,
  third,
  fourth,
} from "../../components/color/Index";
import * as ImagePicker from "expo-image-picker";
import ButtonMain from "../../components/button/ButtonComponent";
import axios from "axios";
import backendUrl from "../../api/config";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const underWater = require("../../assets/underwater.jpg");
// const bg = require("../../assets/bg.jpg");

const Home = () => {
  const navigation = useNavigation();
  const [isGallery, setIsGallery] = useState(null);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const predict = async () => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: image,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      const res = await axios.post(`${backendUrl}/predict`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      AsyncStorage.setItem("result", JSON.stringify(res.data));
      setImage(null);
      navigation.navigate("probs");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* <View>
          <Image source={bg} style={styles.bg} />
        </View> */}
        <View style={styles.header}>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text1Color}>Fish Classification</Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="history" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* tagline */}
        <Text style={styles.headingTitle}>
          What do you want to look{"\n"}for today?
        </Text>
        {/* box */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.box}>
            <Image
              source={underWater}
              style={{
                width: "100%",
                height: 121,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        </View>
        {/* tagline start*/}
        <View style={{ alignItems: "center", marginVertical: 40 }}>
          <Text style={styles.textStart}>Start Trying</Text>
        </View>
        {/* Select Image */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.btnImage} onPress={pickImage}>
            <MaterialIcons
              name="add-photo-alternate"
              size={30}
              color={primary}
            />
            <Text style={{ color: primary, fontSize: 18 }}>Select Image</Text>
          </TouchableOpacity>
        </View>
        {/* Priview Image */}
        <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
          <View style={styles.boxPreview}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: "100%",
                  height: 196,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            ) : (
              <Text style={{ color: fourth, fontSize: 14 }}>Preview Image</Text>
            )}
          </View>
        </View>
        <ButtonMain
          icon={"rocket1"}
          onClick={predict}
          text={"Start Classify"}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  header: {
    marginTop: 30,
    backgroundColor: primary,
    width: 390,
    maxWidth: 400,
    paddingVertical: 20,
  },
  text1Color: {
    color: fourth,
    fontSize: 20,
  },
  headingTitle: {
    fontSize: 26,
    letterSpacing: 1,
    color: fourth,
    marginHorizontal: 20,
  },
  box: {
    width: "100%",
    height: 130,
    backgroundColor: fourth,
    borderColor: third,
    borderWidth: 5,
    borderRadius: 12,
    marginTop: 20,
  },
  textStart: {
    color: fourth,
    fontSize: 20,
    fontWeight: "700",
  },
  btnImage: {
    width: "auto",
    backgroundColor: fourth,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  boxPreview: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderColor: fourth,
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  // bg: {
  //   position: "absolute",
  //   opacity: 0.1,
  // },
});
