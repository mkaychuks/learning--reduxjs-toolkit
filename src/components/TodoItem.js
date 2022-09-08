import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ title, id, onPressHandler }) => {
  return (
    <View style={styles.todoItemWrapper}>
      <View style={styles.todoItem}>
        <Text style={{fontSize: 15}}>{title}</Text>
        <Pressable onPress={onPressHandler.bind(this, id)}>
          <MaterialIcons name="cancel" size={20} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItemWrapper: {
    width: "100%",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
