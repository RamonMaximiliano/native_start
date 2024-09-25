import React, { useContext } from "react";
import Toast from "react-native-toast-message";
import { TaskContext } from "../provider/TaskContext";
import Task from "./Task";
import Fontisto from "@expo/vector-icons/Fontisto";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function MainScreen() {
  const {
    newTask,
    setNewTask,
    tasks,
    setTasks,
    storeTasks,
    updateTask,
    clearList,
    edited,
  } = useContext(TaskContext);

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

        <View style={edited !== null ? styles.bottom : styles.bottomEdit}>
          <TextInput
            style={styles.taskInput}
            placeholder="Type your task"
            value={newTask}
            onChangeText={(e) => setNewTask(e)}
          />
          {/*We need to use this TouchableOpacity component to handle press events*/}

          {edited !== null ? (
            <TouchableOpacity
              style={styles.saveSign}
              onPress={() => updateTask()}
            >
              <Fontisto name="save" size={24} color="blue" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.plusSign}
              onPress={() => updateTask()}
            >
              <Text style={styles.plusSignText}>+</Text>
            </TouchableOpacity>
          )}
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
    paddingTop:25,
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
  bottomEdit: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
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

  saveSign: {
    width: 60,
    height: 60,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    margin: 15,
    borderRadius: 50,
  },

  plusSignText: {
    fontSize: 37,
    color: "blue",
  },
});
