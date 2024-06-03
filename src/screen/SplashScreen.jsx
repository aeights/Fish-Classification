import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { StackActions } from "@react-navigation/native";
import TypeWriter from "react-native-typewriter";
import { useFonts } from "expo-font";
import { primary, secondary, third } from "../../components/color/Index";
import { LinearGradient } from "expo-linear-gradient";

const image = require("../../assets/Logo Fish 1.png");
const image2 = require("../../assets/Logo Fish 2.png");
const image3 = require("../../assets/Logo Fish 3.png");
const image4 = require("../../assets/Logo Fish 4.png");
const SplashScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Permanent-Marker": require("../../assets/fonts/PermanentMarker-Regular.ttf"),
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    const time = setTimeout(() => {
      navigation.dispatch(StackActions.replace("onboarding"));
    }, 3000);
  }, [fadeAnim]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={[primary, third, "#fff"]}
      ></LinearGradient>
      <Animated.Image
        style={[styles.image, { opacity: fadeAnim }]}
        source={image3}
      />
      {/* <Text style={styles.typing}> Fish Classification </Text> */}
      <TypeWriter style={styles.typing} maxdelay={300} minDelay={50} typing={1}>
        FISH CLASSIFICATION
      </TypeWriter>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  image: {
    width: 200,
    height: 200,
  },
  typing: {
    fontFamily: "Permanent-Marker",
    fontSize: 24,
    color: "white",
  },
});
