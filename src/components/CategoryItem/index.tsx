import React from "react";
import { TouchableOpacity, Text, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default function index() {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.25,
        height: width * 0.24,
        flexDirection: "column",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
        source={{
          uri: "https://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg",
        }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        İndirimler
      </Text>
    </TouchableOpacity>
  );
}
