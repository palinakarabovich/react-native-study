import React from "react";
import { StyleSheet, View } from "react-native"

interface IListItem {
  text: string,
}

const ListItem:React.FC<IListItem> = ({text}) => {
  return(
    <View style={styles.item}>
      <View style={styles.icon} />
      {text}
    </View>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  item:{
    padding: 15,
    fontSize: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C2911E',
    color: 'white',
    borderRadius: 20,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 10,
    borderColor: '#4B4237'
  }

})