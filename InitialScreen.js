import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function InitialScreen({ navigation }) {
  const { width, height } = Dimensions.get('window');

  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
      <View style={[styles.imageContainer, { height: height * 0.4, marginTop: height * 0.05 }]}>
        <Image source={require('./assets/images/logoabertura.png')} style={[styles.image, { width: width }]} resizeMode="contain" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { height: height * 0.08, width: width * 0.6 }]}
          onPress={() => navigation.navigate('TourismDetailsScreen')}
        >
          <Text style={styles.buttonText}>Cidades</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.imageContainer, { height: height * 0.2, marginBottom: height * 0.05 }]}>
        <Image source={require('./assets/images/rodapeNovo.png')} style={[styles.image, { width: width }]} resizeMode="contain" />
      </View>
    </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  //container: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  paddingVertical: 20,
  //  backgroundColor: '#3E1166', // Tom de roxo do botão para o fundo
  //},
  container: {
    flexGrow: 1,
    padding: Dimensions.get('window').width * 0.06,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flexShrink: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E1166', // Cor contrastante para o botão
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', // Cor do texto do botão para contraste com o fundo
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default InitialScreen;