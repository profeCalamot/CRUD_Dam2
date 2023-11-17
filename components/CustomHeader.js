// Importamos React y varios componentes de React Native. Es como recoger las herramientas antes de empezar a construir algo.
import React from 'react';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
// Aquí importamos los íconos de Ionicons, para que nuestro UI sea más atractivo.
import Icon from 'react-native-vector-icons/Ionicons';
// Importamos los estilos personalizados para nuestro encabezado.
import styles from './styles/CustomHeaderStyle';

// Definimos nuestro componente funcional CustomHeader.
// Recibe dos props: locationHome (para saber si estamos en la pantalla de inicio) y navigation (para manejar la navegación).
const CustomHeader = ({ locationHome, navigation }) => {
    // Iniciamos el renderizado de nuestro componente.
    return (
        // SafeAreaView asegura que nuestro contenido no se solape con áreas críticas del dispositivo, como la barra de estado.
        <SafeAreaView>
            {/* View es como una caja donde colocamos otros componentes. */}
            <View style={styles.container}>
                {/* Si no estamos en "home", mostramos un botón para volver atrás. */}
                {!locationHome && (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        {/* Icono de flecha hacia atrás. Tocarlo nos lleva a la pantalla anterior. */}
                        <Icon name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                )}
                {/* Contenedor para los íconos de acciones */}
                <View style={styles.iconButtonContainer}>
                    {/* Botón para ir a la pantalla de configuración */}
                    <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionScreen')} style={styles.notificationsButton}>
                        <Icon name="settings" size={30} color="black" />
                    </TouchableOpacity>
                    {/* Botón para crear algo nuevo */}
                    <TouchableOpacity onPress={() => navigation.navigate('AddScreen')} style={styles.textButton}>
                        <Text>Crear</Text>
                    </TouchableOpacity>
                </View>
                {/* Repetimos la estructura para más acciones */}
                <View style={styles.iconButtonContainer}>
                    {/* Botón para modificar el perfil o configuraciones */}
                    <TouchableOpacity onPress={() => navigation.navigate('ModificarScreen')} style={styles.notificationsButton}>
                        <Icon name="person-circle-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ModificarScreen')} style={styles.textButton}>
                        <Text>Modificar</Text>
                    </TouchableOpacity>
                </View>
                {/* Y más botones... */}
                <View style={styles.iconButtonContainer}>
                    {/* Este para "no me gusta", o para eliminar algo */}
                    <TouchableOpacity onPress={() => navigation.navigate('EliminarScreen')} style={styles.notificationsButton}>
                        <Icon name="heart-dislike-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('EliminarScreen')} style={styles.textButton}>
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

// Exportamos nuestro componente para que pueda ser utilizado en otras partes de la app.
export default CustomHeader;
