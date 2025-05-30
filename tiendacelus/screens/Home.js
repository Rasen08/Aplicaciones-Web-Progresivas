import { View, Button, Text, StyleSheet } from 'react-native'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Inicio</Text>
        <Text style={styles.subtitle}>Vista principal en proceso</Text>
        <View style={styles.buttonContainer}>
          <Button title='Productos' onPress={() => navigation.navigate("Productos")}/>  
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Carrito' onPress={() => navigation.navigate("Carrito")}/>  
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32
  },
  buttonContainer: {
    marginBottom: 16
  }
});