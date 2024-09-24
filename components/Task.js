import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import DoubleClick from "react-native-double-tap";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TaskContext } from "../provider/TaskContext";

const Task = (props) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  const [color, setColor] = useState(false);

  function changeColor() {
    setColor(!color);
  }

  return (
    <DoubleClick doubleTap={changeColor} timeout={1000}>
      <View
        style={color ? styles.taskContainerGreen : styles.taskContainerBlue}
      >
        <View style={styles.iconsView}>
          <TouchableOpacity onPress={() => editTask(props.taskText)}>
            <FontAwesome name="pencil-square-o" size={24} color="#07005c" />
          </TouchableOpacity>
        </View>

        <View style={styles.taskView}>
          <Text style={styles.taskText}>{props.taskText}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteTask(props.taskText)}>
          <FontAwesome name="trash-o" size={24} color="#07005c" />
        </TouchableOpacity>
      </View>
    </DoubleClick>
  );
};

export default Task;

const styles = StyleSheet.create({

  taskContainerBlue: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2d7bee",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems:"center"
  },

  taskContainerGreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems:"center"
  },

  taskView: {
    width: 210,
  },

  taskText: {
    color: "white",
    fontSize: 18,
  },

  iconsView: {
    width: 24,
  },

});

/* 

npm install --save react-native-double-tap

https://stackoverflow.com/questions/74769646/how-to-use-double-tap-in-react-native


*/
