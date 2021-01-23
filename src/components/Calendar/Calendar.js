import React from "react";
import { Text, View } from "react-native";
import { Month } from "./Month";

export const Calendar = () => {
  const month = new Date().getMonth();

  return (
    <View>
      <Month selectedMonth={month} />
    </View>
  );
};
