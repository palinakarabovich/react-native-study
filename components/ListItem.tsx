import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native"

interface IListItem {
  text: string,
}

const ListItem: React.FC<IListItem> = ({ text }) => {

  const [isClicked, setClicked] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setClicked(!isClicked)}>
      <View style={styles.item}>
        <View style={styles.icon}>
          {isClicked &&
          <ImageBackground source={{uri: 'https://www.svgrepo.com/download/80301/cross.svg'}} resizeMode="cover" style={styles.image} />}
        </View>
        <Text>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  item: {
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
  image: {
    flex: 1,
    justifyContent: 'center',
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