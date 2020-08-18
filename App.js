import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, SafeAreaView } from "react-native";

export default function App() {
  console.log("executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => alert("ButtonTapped")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
