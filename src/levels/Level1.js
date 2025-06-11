import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Level1({ navigation }) {
  const [pezEnBoton, setPezEnBoton] = useState(false);

  const handleCombinar = () => {
    setPezEnBoton(true);
    setTimeout(() => {
      navigation.navigate('Level2'); // pasa al siguiente nivel
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/cuarto.png')} style={styles.fondo} />

      {!pezEnBoton && (
        <>
          <TouchableOpacity style={styles.objeto} onPress={handleCombinar}>
            <Image source={require('../assets/images/pez.png')} style={styles.icono} />
            <Text style={styles.texto}>Usar pez con botón</Text>
          </TouchableOpacity>
        </>
      )}

      {pezEnBoton && (
        <Text style={styles.escapaste}>¡Escapaste combinando un pez con un botón invisible!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  fondo: { position: 'absolute', width: '100%', height: '100%' },
  objeto: { backgroundColor: '#fff', padding: 10, margin: 20, borderRadius: 8 },
  icono: { width: 50, height: 50 },
  texto: { fontSize: 16 },
  escapaste: { fontSize: 18, fontWeight: 'bold', marginTop: 20 }
});