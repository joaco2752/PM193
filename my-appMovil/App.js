
/* ZONa1 Importaciones: */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto=(props)=>{
  const{contenido}=props
  return(
    <Text>{contenido}</Text>
  )
}

/* Zona2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenido="Hola"></Texto>
      <Texto contenido="Mundo"></Texto>
      <Texto contenido="ReactNative"></Texto>
      <Button title="Presionar"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
