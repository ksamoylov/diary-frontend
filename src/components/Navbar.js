import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diary</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323030",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
