import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StackActions } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { primary, secondary, third } from "../../components/color/Index";

const eye = "#00B1EF";

const imageDifficult = require("../../assets/Fish Screen.png");
const logoDefault = require("../../assets/logo-default.png");

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(scaleAnim, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    });
    const time = setTimeout(() => {
      navigation.dispatch(StackActions.replace("onboarding"));
    }, 4000);
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.image, { opacity: fadeAnim }]}
        source={logoDefault}
      />
      <Animated.View
        style={[
          styles.eye,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      ></Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primary,
  },
  image: {
    width: 200,
    height: 200,
  },
  eye: {
    width: 5,
    height: 5,
    backgroundColor: "#fff",
    borderRadius: 100,
    position: "absolute",
    right: 160,
    bottom: 430,
  },
});
