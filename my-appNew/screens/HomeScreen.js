import React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ImageBackground, SafeAreaView, TextInput, Switch, Alert} from 'react-native';
import {Button} from 'react-native-paper';

const HomeScreen = () => {
    const [aceptaTermino, setAceptaTermino] = useState(false);
    const correoValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const camposCorrectos = () => {
        if (!nombre || !email || !correoValido(email)){
            window.alert("Error, por favor completa todos los campos correctamente")
            return;
        }
        
        if (!aceptaTermino) {
          window.alert("Terminos no Aceptados. Debes aceptar los términos y condiciones")
          return;
        }
          window.alert(`Registro Exitoso
            Nombre: ${nombre}
            Email: ${email}`)
        }

    


    return(
    <ImageBackground 
      source={require("C:/laragon/www/PM193/my-appNew/assets/marvel.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <View style={styles.container}>
        <Text style={styles.text}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          
          placeholder="Nombre Completo"
          placeholderTextColor={'#fff'}
          value={nombre}
          onChangeText={setNombre}
        />
        </View>
      
      <View style={styles.container}>
      <TextInput 
        style={[styles.input, !correoValido(email) && setEmail ? styles.errorInput : null]}
        placeholder="Correo Electronico"
        placeholderTextColor={'#fff'}
        value={email}
        onChangeText={setEmail}
      />
      {!correoValido(email) && setEmail !== '' && (
        <Text style={styles.errorText}>Correo Invalido</Text>
      )}
      </View>

        <View style={styles.container}>
            <Text style={styles.text}>Acepto Terminos y Condiciones</Text>
            <Switch
            value={aceptaTermino}
            onValueChange={setAceptaTermino}
            thumbColor={aceptaTermino ? "#00ff00" : "#fff"}
            />
        </View>

        <View style={styles.container}>
            <Button
            mode="contained"
            onPress={camposCorrectos}
            style={styles.boton}
            >Registrate</Button>
        </View>
      </View>
    </ImageBackground>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        backgroundColor:'#5d6d7e',
        padding:10,
        justifyContent:'space-evenly'
    },
    text:{
        color:'#fff',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold'
    },
    input:{
        height:40,
        borderColor: '#fff',
        borderWidth:1,
        borderRadius: 5,
        padding:10,
        color:'#fff'
    },
    errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  boton: {
    marginTop: 10,
  }
});