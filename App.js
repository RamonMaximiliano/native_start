import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View>
      <View style={styles.mainTitle}>
        <Text style={styles.textColorTitle}>Today's tasks</Text>
      </View>
      <ScrollView>
        {/*ScrollView deixa fazer scroll caso os items passem do tamanho da tela*/}
        <View style={styles.container}>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
          <Task taskText="Test"></Task>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  mainTitle: {
    color: "white",
    padding: 20,
    backgroundColor: "blue",
    alignItems: "center",
  },
  textColorTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

/* 

REACT NATIVE:

Part 1: 5min
https://www.youtube.com/watch?v=0kL6nhutjQ8&ab_channel=MadeWithMatt


Part 2:
https://www.youtube.com/watch?v=00HFzh3w1B8&ab_channel=MadeWithMatt

ANOTHER TO DO:
https://www.youtube.com/watch?v=cmXZNGXjXPM&ab_channel=TheAwesomeDev


*/
