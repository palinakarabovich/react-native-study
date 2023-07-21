import { View, Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        To do's:
      </Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#A49694',
      padding: 20,
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
})