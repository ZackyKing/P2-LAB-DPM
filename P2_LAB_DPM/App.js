import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Adalah Text. by ZackyArgyaTarigan</Text>
      <View style={styles.boxContainer}>
        <View style={styles.orangeBox} />
        <View style={styles.redBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dedede",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  box: {
    width: 100,
    height: 100,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});

export default App;

//ZackyArgyaTarigan 223510719 5E