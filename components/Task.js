import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{props.taskText}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#5e9ce8",
    color: "white",
    width: "80%",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  taskText: {
    color: "white",
    fontSize: 18,
  },
});
