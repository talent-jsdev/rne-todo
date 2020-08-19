import React from "react";
import { StyleSheet, Button, SafeAreaView } from "react-native";

export default function App() {
  console.log("executed");
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        onPress={() =>
          console.log("Button Clicked!")
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
