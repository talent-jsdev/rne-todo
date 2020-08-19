import React from "react";
import { StyleSheet, Button, Alert, SafeAreaView } from "react-native";

export default function App() {
  console.log("executed");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", text => console.log(text))
        }
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
