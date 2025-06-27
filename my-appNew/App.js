import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import HomeScreeen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
export default function App() {
  const [estaCargando, setEstaCargando] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout (() => {
      setEstaCargando(false);
    }, 4500);

    return () => clearTimeout(timer);
  })

  return (
    <View style={{ flex:1 }}>
      <StatusBar hidden/>
      {estaCargando ? <SplashScreen/> : <HomeScreeen/>}
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
