import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home";
import { store } from "./src/store";
import Login from "./src/screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitleAlign: "center" }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
