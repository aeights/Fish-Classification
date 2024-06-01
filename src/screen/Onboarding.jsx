import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Search Fish Object",
    description: "Find the fish object whose type you want to check",
    image: require("../../assets/search.png"),
  },
  {
    id: "2",
    title: "Upload Files Image",
    description:
      "Select and upload an image of the fish object that you already have",
    image: require("../../assets/upload.png"),
  },
  {
    id: "3",
    title: "Start Classify",
    description: "Click start to classify fish types",
    image: require("../../assets/start.png"),
  },
  {
    id: "4",
    title: "Check Results",
    description:
      "Check the probability results of the images you are classifying",
    image: require("../../assets/results.png"),
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={item.image}
        style={{ height: "60%", width, resizeMode: "contain" }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [CurrentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                CurrentSlideIndex == index && {
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {CurrentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50, alignItems: "center" }}>
              <TouchableOpacity
                style={[styles.btnStarted]}
                onPress={() => navigation.navigate("home")}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "800", fontSize: 15 }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: "transparent",
                    borderColor: "#407BFF",
                    borderWidth: 1,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{ color: "#407BFF", fontWeight: "800", fontSize: 15 }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn]} onPress={nextSlide}>
                <Text
                  style={{ color: "#fff", fontWeight: "800", fontSize: 15 }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    // console.log(currentIndex);
    setCurrentSlideIndex(currentIndex);
  };
  const nextSlide = () => {
    const nextSlideIndex = CurrentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <Text>Onboarding</Text> */}
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  title: {
    color: "#407BFF",
    fontSize: 28,
    fontWeight: "800",
  },
  description: {
    fontWeight: "300",
    color: "#407BFF",
    fontSize: 14,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "#407BFF",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#407BFF",
    justifyContent: "center",
    alignItems: "center",
  },
  btnStarted: {
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#407BFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
