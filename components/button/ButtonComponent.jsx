import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { secondary } from '../color/Index';

const ButtonMain = ({ text, icon, onClick }) => {
  return (
    <>
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity
          onPress={onClick}
          style={styles.btn}
        >
          <AntDesign name={icon} size={35} color="white" />
          <Text style={{ color: "#fff", fontSize: 18 }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ButtonMain;

const styles = StyleSheet.create({
  btn: {
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