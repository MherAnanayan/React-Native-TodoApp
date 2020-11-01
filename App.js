import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { Addtodo } from './src/Addtodo';
import { Todo } from './src/Todo';

export default function App() {

  const [todos, setTodo] = useState([])

  const addTodo = (title) => {
    setTodo(prev => [
      ...prev,
      {
        id: Date.now().toString().toString(),
        title
      }
    ])
  }

  const removeHandler = (id) => {
    setTodo(prev => prev.filter(todo => todo.id !== id))
  }


  return (
    <View style={styles.container}>
      <Navbar />
      <Addtodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo
          todo={item}
          onRemove={removeHandler}
        />} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4c8de'
  },
});
