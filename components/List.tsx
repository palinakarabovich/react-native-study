import { FlatList, StyleSheet, View } from "react-native"
import { toDoList } from "../assets/mockData"
import ListItem from "./ListItem";
import React from "react";
import { ITodo } from "../App";

interface IList {
  data: Array<ITodo>
}


const List: React.FC<IList> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem text={item.text} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})