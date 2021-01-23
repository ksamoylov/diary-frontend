import React from "react";
import { Text, View } from "react-native";

const SUNDAY_NUMBER = 7;

export const Month = ({ selectedMonth }) => {
  const dateWeekMap = createDateWeekMap(selectedMonth);

  return <View></View>;
};

const createDateWeekMap = (selectedMonth) => {
  const date = new Date(2021, selectedMonth);
  const dateWeekMap = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
  };

  do {
    let dayOfWeek = date.getDay();
    let dayOfMonth = date.getDate();

    // 0 - это воскресенье, сделаем его 7 днем недели
    if (dayOfWeek === 0) {
      dayOfWeek = SUNDAY_NUMBER;
    }

    dateWeekMap[dayOfWeek].push(dayOfMonth);
    date.setDate(date.getDate() + 1);
  } while (date.getMonth() === selectedMonth);

  return dateWeekMap;
};
