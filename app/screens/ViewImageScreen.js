import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
    backgroundColor: "#fc5c65",
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
    backgroundColor: "#4ecdc4",
  },
});
