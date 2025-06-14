
/* ZONa1 Importaciones: */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto =()=>{
  const [contenido,setContenido]= useState('Hola Mundo')
  const actualizaTexto =()=>{setContenido('Estado Modificado')}
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
}

/* Zona2: Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Texto>Hola</Texto>
      <Texto>mundo</Texto>
      <Texto>React Native</Texto>
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
