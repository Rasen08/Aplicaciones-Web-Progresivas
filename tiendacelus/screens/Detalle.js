import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Detalle({ route, navigation }) {
  const {producto} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle del producto</Text>
      <Image source={{uri: producto.imagen }} style={styles.fotop} />
      <Text style={styles.descripcion}>Nombre: {producto.nombre}</Text>
      <Text style={styles.descripcion}>Marca: {producto.marca}</Text>
      <Text style={styles.descripcion}>Precio: {producto.precio}</Text>
      <Text style={styles.descripcion}>Disponibles: {producto.stock}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Agregar al carrito" onPress={() => alert('Agregado al carrito')} />
      </View>
      <Button title='Volver al inicio' onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  },
  descripcion: {
    fontSize: 20,
    marginBottom: 8
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16
  },
  fotop: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius: 10
  }
});