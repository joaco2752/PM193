/* Zona 1: Lugar de las importaciones */  
import {View, StatusBar} from 'react-native';
import React, { useEffect,useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';


/* Zona 2: Main */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return ()=> clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden/>
      {isLoading ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}

