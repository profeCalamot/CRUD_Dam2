import { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";
import styles from "./styles/AddStyle";

const AddScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        // Handle registration logic here
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>Crear Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#888"

                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                keyboardType="email-address"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Registrarse" onPress={handleRegister} />
        </View>
    );
}
export default AddScreen;