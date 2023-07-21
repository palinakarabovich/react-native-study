import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import { toDoList } from './assets/mockData';
import React from 'react';

export interface ITodo {
  text: string,
  id: number
}

export default function App() {

  const [todoData, setTodoData] = React.useState(toDoList);
  const [inputValue, setInputValue] = React.useState('');

  const handleAddToList = (todo: ITodo) =>{
    console.log(todo)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form value={inputValue} add={handleAddToList} setValue={setInputValue}/>
      <List data={todoData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#EDE7D9'
  },
});
