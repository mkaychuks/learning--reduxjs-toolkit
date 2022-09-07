import {
  Button,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [data, setData] = useState("");

  const changeName = () => {
    Keyboard.dismiss();
    dispatch(
      actions.setTodo(
        (payload = {
          id: Math.floor(Math.random() * 100000).toString(),
          todo: data,
        })
      )
    );
    setData("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* the header for todo Input */}
      <View style={styles.inputWrapper}>
        <TouchableHighlight style={styles.button} onPress={changeName}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
        <TextInput
          placeholder="Todo"
          style={styles.input}
          value={data}
          onChangeText={(value) => setData(value)}
        />
      </View>

      {/* empty space */}
      <View
        style={{
          marginTop: 10,
          height: StyleSheet.hairlineWidth,
          marginBottom: 10,
          backgroundColor: "#ccc",
          width: "100%",
        }}
      />

      {/* Todo wrapper */}
      <View style={styles.todoWrapper}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <Text>{item.todo}</Text>
              <Text>{item.id}</Text>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "20%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  input: {
    paddingStart: 12,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "#ccc",
    borderWidth: 1,
    width: "80%",
    marginRight: 8,
  },
  todoWrapper: {
    width: "100%",
    backgroundColor: "red",
    flex: 1,
  },
});
