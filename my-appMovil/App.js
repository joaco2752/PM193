import {
    ScrollView, // hacer deslizable
    StatusBar,  // barra de estado
    StyleSheet, // estilos
    Text,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useRef } from 'react';

const App = () => {
    
    return (
        <SafeAreaProvider>
            <ScrollView style={styles.container} edges={['top']}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <Text style={styles.text}>
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                        Utiliza este espacio para toda la pantalla
                    </Text>
                </ScrollView>
            </ScrollView>
        </SafeAreaProvider>
    );
};

// Definimos los estilos con StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,                              // Ocupa todo el alto disponible de la pantalla
        paddingTop: StatusBar.currentHeight, // Evita que el contenido se solape con la barra de estado
    },
    scrollView: {
        backgroundColor: 'green',            // Fondo verde para visualizar el área del ScrollView
    },
    text: {
        fontSize: 42,                         // Texto grande
        padding: 12,                          // Espaciado interno
    },
});

export default App;