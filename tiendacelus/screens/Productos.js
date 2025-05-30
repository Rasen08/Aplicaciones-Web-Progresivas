import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export default function Productos({navigation}) {
    const [productos, setProductos] = useState([]); //estado vacío para llenar

    useEffect(() => {
        const cargarProductos = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, 'productos'));
                const productosFirebase = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosFirebase);
            } catch(error) {
                console.error('Error al cargar productos: ', error);
            }
        };

        cargarProductos();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos</Text>
      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.listaContent}
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalle', {producto:item})}>
                <Text style={styles.nombre}> {item.nombre} </Text>
                <Text> Precio: {item.precio} </Text>
                <Text> Marca: {item.marca} </Text>
            </TouchableOpacity>
        )}
      />
      
      <Button title='Volver al inicio' onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center'
  },
  lista: {
    flex: 1
  },
  listaContent: {
    paddingBottom: 20
  },
  item: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginVertical: 16
  }
});
