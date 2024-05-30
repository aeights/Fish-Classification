import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { primary, secondary, third } from "../../components/color/Index";
import { FullWindowOverlay } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [isGallery, setIsGallery] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <View style={styles.container}>
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
      <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
        <View style={styles.box}>
          <Text></Text>
        </View>
      </View>
      {/* tagline start*/}
      <View style={{ alignItems: "center", marginVertical: 40 }}>
        <Text style={styles.textStart}>Start Trying</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity style={styles.btnImage}>
          <MaterialIcons name="add-photo-alternate" size={30} color={primary} />
          <Text style={{ color: primary, fontSize: 18 }}>Select Image</Text>
        </TouchableOpacity>
      </View>
      {/* Priview Image */}
      <View style={{ alignItems: "center", paddingHorizontal: 20 }}>
        <View style={styles.boxPreview}>
          <Text style={{ color: "#fff", fontSize: 14 }}>Preview Image</Text>
        </View>
      </View>

      {/* Button Start Classify */}
      <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("probs")}
          style={styles.btnClassify}
        >
          <AntDesign name="rocket1" size={35} color="white" />
          <Text style={{ color: "#fff", fontSize: 18 }}>Start Classify</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    color: "#fff",
    fontSize: 20,
  },
  headingTitle: {
    fontSize: 26,
    letterSpacing: 1,
    color: "#fff",
    marginHorizontal: 20,
  },
  box: {
    width: "100%",
    height: 130,
    backgroundColor: "#fff",
    borderColor: third,
    borderWidth: 5,
    borderRadius: 12,
    marginTop: 20,
  },
  textStart: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  btnImage: {
    width: "auto",
    backgroundColor: "#fff",
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
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnClassify: {
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
