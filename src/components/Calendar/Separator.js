import React from "react";
import { View } from "react-native";

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = {
  separator: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: "100%",
  },
};
