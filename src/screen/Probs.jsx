import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  primary,
  secondary,
  third,
  fourth,
} from "../../components/color/Index";
import { useNavigation } from "@react-navigation/native";
import ButtonMain from "../../components/button/ButtonComponent";
import ProgressBar from "../../components/utils/ProgressBarComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import backendUrl from "../../api/config";

const Probs = ({}) => {
  const navigation = useNavigation();
  const [imagePath, setImagePath] = useState(null);
  const [result, setResult] = useState([]);

  const getResult = async () => {
    const result = await AsyncStorage.getItem("result");
    const data = JSON.parse(result);
    setImagePath(`${backendUrl}/results/${data.image_path}`);
    setResult(data.predictions);
    console.log(result);
    // AsyncStorage.removeItem('result');
  };

  const backToHome = () => {
    AsyncStorage.removeItem("result");
    navigation.navigate("home");
  };

  const data = [
    { name: "Mosquito Fish", probs: 0.48 },
    { name: "Mudfish", probs: 0.16 },
    { name: "Black Spotted Barb", probs: 0.12 },
    { name: "Grass Carp", probs: 0.08 },
    { name: "Long-Snouted Pipefish", probs: 0.06 },
  ];

  useEffect(() => {
    getResult();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <Text style={styles.text1Color}>Fish Classification</Text>
        </View>
      </View>
      {/* tagline */}
      <Text style={styles.headingTitle}>
        Below are the result of{"\n"}your search
      </Text>
      {/* Priview Image */}
      <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
        <View style={styles.boxPreview}>
          {imagePath ? (
            <Image
              source={{ uri: imagePath }}
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
      {/* Text Fish Name */}
      {result.length > 0 && result[0].label ? (
        <Text
          style={{
            textAlign: "center",
            marginVertical: 30,
            color: fourth,
            fontSize: 16,
          }}
        >
          {result[0].label}
        </Text>
      ) : (
        <Text></Text>
      )}
      {/* Classifications Detail */}
      <Text
        style={{
          marginHorizontal: 20,
          color: fourth,
          fontSize: 20,
          fontWeight: "700",
          letterSpacing: 1,
        }}
      >
        Classification Details
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {result.map((item, index) => {
          return (
            <ProgressBar
              key={index}
              probs={
                item.probability == 0
                  ? "0.00"
                  : item.probability == 1
                  ? "1.00"
                  : item.probability
              }
              name={item.label}
            />
          );
        })}
      </View>
      <ButtonMain icon={"rocket1"} onClick={backToHome} text={"Try Another"} />
    </ScrollView>
  );
};

export default Probs;

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
  boxPreview: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderColor: fourth,
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
