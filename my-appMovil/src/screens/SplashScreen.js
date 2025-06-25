import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
    return (
    <View source={styles.container}>
        <Image source={require("C:/laragon/www/PM193/my-appMovil/src/assets/globo.jpg")}
            style={styles.logo}
            resizeMode="contain"
        />
        <Text style={styles.title}>
            Bienvenido a la App
        </Text>
        
    </View>
    )
};

export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#222831',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:200,
        height:200
    },
    title:{
        marginTop:20,
        color:'#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }
});