import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

// Importa correctamente Firebase
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Configura la autenticación
const auth = getAuth(appFirebase);

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el inicio de sesión
  const logeo = async () => {
    try {
      // Intenta iniciar sesión con las credenciales proporcionadas
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Iniciando sesión', 'Accediendo...');
      props.navigation.navigate('Home'); // Navega a la pantalla Home
    } catch (error) {
      console.log(error.code); // Imprime el código de error en la consola para depuración
      // Maneja errores específicos de Firebase
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'La contraseña es incorrecta. Inténtalo de nuevo.');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'Usuario no encontrado. Verifica tu correo.');
      } else if (error.code === 'auth/invalid-credential') {
        Alert.alert('Error', 'Credenciales inválidas. Verifica tu correo y contraseña.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.padre}>
      <View>
        <Image
          source={require('../assets/LogoStayPuft.jpeg')} // Asegúrate de que esta imagen esté en la carpeta correcta
          style={styles.profile}
        />
      </View>

      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Usuario"
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Password"
            style={{ paddingHorizontal: 15 }}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles.PadreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logeo}>
            <Text style={styles.TextoBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A3FF',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  tarjeta: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  cajaTexto: {
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  PadreBoton: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  cajaBoton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#1D4ED8',
    alignItems: 'center',
  },
  TextoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
