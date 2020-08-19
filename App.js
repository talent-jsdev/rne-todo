import React from "react";
import { StyleSheet, Button, SafeAreaView, StatusBar, Platform } from "react-native";

export default function App() {
  console.log("executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          console.log("Button Clicked!")
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
  },
});
