import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DoubleClick from "react-native-double-tap";

const Task = (props) => {
  const [color, setColor] = useState(false);

  function changeColor() {
    setColor(!color);
  }

  return (
    <DoubleClick doubleTap={changeColor} timeout={1000} >
      <View
        style={color ? styles.taskContainerGreen : styles.taskContainerBlue}
      >
        <Text style={styles.taskText}>{props.taskText}</Text>
      </View>
    </DoubleClick>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainerBlue: {
    backgroundColor: "#2d7bee",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  taskContainerGreen: {
    backgroundColor: "green",
    color: "white",
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  taskText: {
    color: "white",
    fontSize: 18,
  },
});

/* 

npm install --save react-native-double-tap

https://stackoverflow.com/questions/74769646/how-to-use-double-tap-in-react-native


*/
