import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { primary, secondary, third } from "../../components/color/Index";

const Probs = () => {
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
          <Text style={{ color: "#fff", fontSize: 14 }}>Preview Image</Text>
        </View>
      </View>
      {/* Text Fish Name */}
      <Text
        style={{
          textAlign: "center",
          marginVertical: 30,
          color: "#fff",
          fontSize: 16,
        }}
      >
        Fish Name
      </Text>
      {/* Classifications Detail */}
      <Text
        style={{
          marginHorizontal: 20,
          color: "#fff",
          fontSize: 20,
          fontWeight: "700",
          letterSpacing: 1,
        }}
      >
        Classification Details
      </Text>
      <View></View>
      {/* Button Start Classify */}
      <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("probs")}
          style={styles.btnTry}
        >
          <AntDesign name="rocket1" size={35} color="white" />
          <Text style={{ color: "#fff", fontSize: 18 }}>Try Another</Text>
        </TouchableOpacity>
      </View>
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
    color: "#fff",
    fontSize: 20,
  },
  headingTitle: {
    fontSize: 26,
    letterSpacing: 1,
    color: "#fff",
    marginHorizontal: 20,
  },
  boxPreview: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTry: {
    width: "auto",
    backgroundColor: secondary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
