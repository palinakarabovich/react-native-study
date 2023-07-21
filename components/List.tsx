import { FlatList, StyleSheet, View } from "react-native"
import { toDoList } from "../assets/mockData"
import ListItem from "./ListItem";


const List = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        renderItem={({ item }) => <ListItem text={item.text} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})