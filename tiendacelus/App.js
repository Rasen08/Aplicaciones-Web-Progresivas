import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from './firebase/firebaseConfig';
import Home from './screens/Home';
import Detalle from './screens/Detalle';
import Productos from './screens/Productos';
import Carrito from './screens/Carrito';

import { NavigationContainer } from '@react-navigation/native'
//Componente principal que envuelve toda la aplicación. 

import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Crea un stack de pantallas

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("Firestore conectado:", db);

return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detalle' component={Detalle} />
          <Stack.Screen name='Productos' component={Productos} />
          <Stack.Screen name='Carrito' component={Carrito} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
