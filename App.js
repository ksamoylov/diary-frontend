import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import {Calendar} from "./src/components/Calendar/Calendar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Calendar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    flex: 1,
  },
});
