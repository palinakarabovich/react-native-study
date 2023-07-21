import React from "react";
import { View } from "react-native"

interface IListItem {
  text: string,
}

const ListItem:React.FC<IListItem> = ({text}) => {
  return(
    <View>
      {text}
    </View>
  )
}

export default ListItem;