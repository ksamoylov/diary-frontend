import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SUNDAY_NUMBER = 7;

export const Month = ({ selectedMonth }) => {
  const tableHead = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const tableData = createDateWeekMap(selectedMonth);

  return <View style={styles.container}>{renderHead(tableHead)}</View>;
};

const renderBody = () => {
  return (
    <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
      <View style={{ flex: 1, alignSelf: "stretch" }}></View>
    </View>
  );
};

const renderHead = (tableHead) => {
  return (
    <View style={styles.head}>
      {tableHead.map((el, index) => {
        return (
          <View style={styles.headCell} key={index}>
            <Text style={{ color: "#fff" }}>{el}</Text>
          </View>
        );
      })}
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  head: {
    flex: 1,
    flexDirection: "row",
  },
  headCell: {
    borderWidth: 0.2,
    borderColor: "#f7f7f7",
    backgroundColor: "#323030",
    height: 35,
    width: "14.3%",
    justifyContent: "center",
    alignItems: "center",
  },
});
