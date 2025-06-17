
/* ZONa1 Importaciones: */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const Texto =({style})=>{
  const [contenido,setContenido]= useState('Hola Mundo')
  const actualizaTexto =()=>{setContenido('Estado Modificado')}
  return(
    <Text style={[styles.text,style]} onPress={actualizaTexto}>{contenido}</Text>
  )
}

/* Zona2: Main */
export default function App() {
  const [botonTexto,setBotonTexto]= useState('Presionar')
  const actualizaBotonTexto =()=>{setBotonTexto('Boton Presionado')}
  return (
    <View style={styles.container}>

    
      <Texto style={styles.azul}>Hola</Texto>
      <Texto style={styles.verde}>mundo</Texto>
      <Texto style={styles.negro}>React Native</Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
  },
  //Clase Text que contiene color de texto
  text:{
    color:'white',
    fontSize:'27',
    

  },
  azul:{backgroundColor:'blue'},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor:'black'}
});
