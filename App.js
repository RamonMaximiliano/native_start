import React, { useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const storeTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Failed to save the tasks",
      });
    }
  };

  const getList = async () => {
    try {
      const list = await AsyncStorage.getItem('tasks');
      if (list !== null) {
        setTasks(JSON.parse(list));
      }
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Failed to load the todos",
      });
    }
  };

  useEffect(() => {
    getList();
  }, []);

  function updateTask() {
    if (newTask) {
      setTasks([...tasks, newTask]);
      storeTasks([...tasks, newTask])
      setNewTask("");
      Toast.show({
        type: "success",
        text1: "A New task has been added 👋",
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Please write your task 👋",
      });
    }
  }

  function clearList() {
    setTasks([]);
    AsyncStorage.removeItem('tasks'); 
    Toast.show({
      type: "success",
      text1: "Your task list has been cleared 👋",
    });
  }

  return (
    <>
      <View style={styles.home}>
        <View style={styles.mainTitle}>
          <TouchableOpacity onPress={() => clearList()}>
            <Text style={styles.textColorTitle}>Today's tasks</Text>
          </TouchableOpacity>
          <Text style={styles.createdBy}>Created by Ramon</Text>
          <Text style={styles.createdByClear}>
            Click on app's title to clear the list
          </Text>
          <Text style={styles.createdByClear}>
            Double click a task to mark as finished
          </Text>
        </View>

        <ScrollView style={styles.ScrollView}>
          {/*ScrollView deixa fazer scroll caso os items passem do tamanho da tela*/}
          <View style={styles.container}>
            {tasks.map((item, index) => {
              return <Task taskText={item} key={index}></Task>;
            })}
          </View>
        </ScrollView>

        <View style={styles.bottom}>
          <TextInput
            style={styles.taskInput}
            placeholder="Type your task"
            value={newTask}
            onChangeText={(e) => setNewTask(e)}
          />
          {/*We need to use this TouchableOpacity component to handle press events*/}
          <TouchableOpacity
            style={styles.plusSign}
            onPress={() => updateTask()}
          >
            <Text style={styles.plusSignText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*The Toast needs to be added at the bottom of the app for it to work*/}
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  ScrollView: {
    backgroundColor: "#E8EAED",
    marginBottom: 80,
  },

  mainTitle: {
    color: "white",
    padding: 20,
    backgroundColor: "#07005c",
    alignItems: "center",
  },

  textColorTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  createdBy: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  createdByClear: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },

  bottom: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#85b1f0",
    paddingRight: 25,
    paddingLeft: 25,
    position: "absolute",
    bottom: 0,
  },

  taskInput: {
    width: "60%",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    margin: 15,
    borderRadius: 50,
    fontSize: 15,
  },

  plusSign: {
    width: 60,
    height: 60,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 3,
    margin: 15,
    borderRadius: 50,
  },
  plusSignText: {
    fontSize: 37,
    color: "blue",
  },
});

/* 

ANOTHER TO DO:
https://www.youtube.com/watch?v=cmXZNGXjXPM&ab_channel=TheAwesomeDev

npm install --save react-native-double-tap

https://stackoverflow.com/questions/74769646/how-to-use-double-tap-in-react-native

npm install --save react-native-toast-message

https://github.com/calintamas/react-native-toast-message/blob/main/docs/quick-start.md

*/
