import React from "react";
import { TaskProvider } from "./provider/TaskContext";
import MainScreen from "./components/MainScreen";

export default function App() {
    return (
      <TaskProvider>
        <MainScreen />
      </TaskProvider>
    );
};

/* 

Add feature to not allow to add duplicated task




npm install --save react-native-double-tap

https://stackoverflow.com/questions/74769646/how-to-use-double-tap-in-react-native

npm install --save react-native-toast-message

https://github.com/calintamas/react-native-toast-message/blob/main/docs/quick-start.md


This icons library is installed by default in the Expo package:
https://icons.expo.fyi/Index


To create an ID:
Date.now().toString()


*/
