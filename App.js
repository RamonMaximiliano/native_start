import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
       {/*ScrollView deixa fazer scroll caso os items passem do tamanho da tela*/}
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.taskContainer}>
          {/*In react native you have to give style to the Text for color. */}
          <Text style={styles.textColor}>
            Open up App.js to start working on your app!
          </Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  taskContainer: {
    color: "blue",
    margin: 20,
    padding: 20,
    backgroundColor: "red",
    borderRadius: 5,
  },
  textColor: {
    color: "white",
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