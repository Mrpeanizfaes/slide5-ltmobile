import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const colors = ["green", "blue", "brown", "yellow", "red", "black"];

export default function App() {
  const [background, setBackground] = useState("green");

  function handleOnPress(color) {
    setBackground(color);
  }

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      {colors.map((color) => {
        return (
          <TouchableOpacity
            key={color}
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => handleOnPress(color)}
          >
            <Text style={styles.buttonText}>{color}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
