// Importaciones React-Native y React essentials:
import { View, Text } from "react-native"; // Importa los componentes básicos de la interfaz de usuario.
import styles from "./styles/GastosStyle"; // Importa estilos personalizados desde GastosStyle.
import AsyncStorage from "@react-native-async-storage/async-storage"; // Permite almacenar datos de manera local.
import { useEffect, useState } from "react"; // ¡Trae a la fiesta los hooks de React!

// Aquí definimos el componente ModificarScreen, un lugar para hacer cambios mágicos:
const ModificarScreen = ({ navigation }) => {
    // Estados para guardar las credenciales del usuario. ¡Shh! Es un secreto.
    const [storedUsername, setstoreUsername] = useState('');
    const [storedPassword, setStoredPassword] = useState('');
    const [storedEmail, setStoredEmail] = useState('');

    // La función handleLogin se encarga de la pesca de datos.
    const handleLogin = async () => {
        try {
            // Intenta obtener los datos del almacenamiento local y actualizar los estados.
            const username = await AsyncStorage.getItem("username");
            const password = await AsyncStorage.getItem("password");
            const email = await AsyncStorage.getItem("email");
            setstoreUsername(username);
            setStoredPassword(password);
            setStoredEmail(email);
        } catch (error) {
            // Si algo sale mal, no entres en pánico, solo registra el error.
            console.log(error);
        }
    }

    // useEffect al rescate para llamar a handleLogin cuando el componente se monte.
    useEffect(() => {
        handleLogin()
    }, [])

    // El renderizado del componente: una elegante pantalla para mostrar los datos.
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Modificar Screen</Text>
            <Text style={styles.title}>{storedUsername}</Text>
            <Text style={styles.title}>{storedPassword}</Text>
            <Text style={styles.title}>{storedEmail}</Text>
        </View>
    );
}

// ¡No te olvides de exportar el componente para que pueda hacer su magia en otros lugares!
export default ModificarScreen;
