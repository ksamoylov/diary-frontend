import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getRange } from "../../utils/common";

export const Month = ({ selectedMonth }) => {
  const tableHead = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tableData = getWeeksInMonth(selectedMonth, 2021);

  return (
    <View style={styles.container}>
      <Head tableHead={tableHead}>
        <title>Table head</title>
      </Head>
      <Grid tableData={tableData} />
    </View>
  );
};

const Head = ({ tableHead }) => {
  return (
    <View style={styles.headContainer}>
      {tableHead.map((el, index) => {
        return (
          <View style={styles.headCell} key={index}>
            <Text style={styles.text}>{el}</Text>
          </View>
        );
      })}
    </View>
  );
};

const Grid = ({ tableData }) => {
  const data = Object.values(tableData);

  return (
    <View style={styles.gridContainer}>
      {data.map((column) => (
        <Row column={column} />
      ))}
    </View>
  );
};

const Row = ({ column }) => {
  return (
    <View style={styles.rowStyle}>
      {column.map((data, index) => (
        <Cell key={index} data={data} />
      ))}
    </View>
  );
};

const Cell = ({ data }) => {
  return (
    <View style={styles.cellStyle}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};

const getWeeksInMonth = (month, year) => {
  const weeks = [];
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  const numDays = lastDate.getDate();

  let start = 1;
  let end = 7 - firstDate.getDay();

  do {
    weeks.push(getRange(start, end));
    start = end + 1;
    end = end + 7;
    if (end > numDays) end = numDays;
  } while (start <= numDays);

  return weeks;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  headContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headCell: {
    height: 35,
    width: 54,
    marginRight: 1,
    marginLeft: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  rowStyle: {
    flexDirection: "row",
    flex: 1,
  },
  cellStyle: {
    height: 50,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 1,
    marginLeft: 1,
  },
  text: {
    color: "#fff",
  },
});
