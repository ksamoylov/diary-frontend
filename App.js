import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import {Calendar} from "./src/components/Calendar/Calendar";
import {MAIN_COLOR_THEME} from "./src/enums/common";

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
    backgroundColor: MAIN_COLOR_THEME,
    flex: 1,
  },
});
