import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
    return (
    <View source={styles.container}>
        <Image source={require("C:/laragon/www/PM193/my-appNew/assets/marvelLogoVertical.png")}
            style={styles.logo}
            
        />
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
        width:400,
        height:900,
        justifyContent:'flex-end',
        alignItems:'center'
        
    },
    title:{
        marginTop:20,
        color:'#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }
});