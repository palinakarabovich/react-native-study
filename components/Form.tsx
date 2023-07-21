import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { ITodo } from "../App";

interface IForm {
  value: string,
  add: (arg: ITodo) => void,
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<IForm> = ({value, add, setValue}) => {

  
  return(
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      />
      <Button
        color={'#736B60'}
        title={'add'}
      />
    </View>
  )
}

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 30,
    backgroundColor: 'white',
    marginBottom: 10,
    borderBottomColor: '#A49694',
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 20
  },
  button: {

  }
})