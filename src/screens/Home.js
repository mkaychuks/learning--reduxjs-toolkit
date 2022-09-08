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
import TodoItem from "../components/TodoItem";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [data, setData] = useState("");

  const addTodoItem = () => {
    Keyboard.dismiss();
    if (data === "") {
      console.warn("Input cannot be empty");
    } else {
      dispatch(
        actions.setTodo(
          ({
            id: Math.floor(Math.random() * 100000).toString(),
            todo: data,
          })
        )
      );
      setData("");
    }
  };

  const deleteItem = (id) => {
    console.log("Delete");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* the header for todo Input */}
      <View style={styles.inputWrapper}>
        <TouchableHighlight style={styles.button} onPress={addTodoItem}>
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
            <TodoItem
              title={item.todo}
              onPressHandler={deleteItem}
              id={item.id}
            />
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
    marginTop: 50,
    alignItems: "center",
    paddingHorizontal: 20,
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
    padding: 13,
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
    paddingVertical: 8,
  },
  todoWrapper: {
    width: "100%",
    flex: 1,
  },
});
