import { View, Button, Text } from 'react-native'

export default function Home({navigation}) {
  return (
    <View>
        <Text>Vista con carrito - en proceso</Text>
        <Button title='Volver al inicio' onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}