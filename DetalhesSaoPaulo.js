import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function DetalhesSaoPaulo({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>São Paulo</Text>
          <View style={styles.imageContainer}>
            <Image source={require('./assets/images/saopaulo.jpg')} style={styles.imageLarge} resizeMode="contain" />
          </View>
          <Text style={styles.description}>
            São Paulo é um município brasileiro, capital do estado homônimo e principal centro financeiro, corporativo e mercantil da América Latina. É a cidade mais populosa do Brasil, do continente americano, da lusofonia e de todo o hemisfério sul, e a quinta mais populosa do mundo, enquanto sua região metropolitana, com cerca de 21 milhões de habitantes, é a sétima maior aglomeração urbana do planeta. São Paulo é a cidade brasileira mais influente no cenário global, sendo, em 2016, a 11.ª cidade mais globalizada do planeta, recebendo a classificação de cidade global alfa, por parte do Globalization and World Cities Study Group & Network (GaWC). O lema da cidade, presente em seu brasão oficial, é Non ducor, duco, frase latina que significa "Não sou conduzido, conduzo".
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            onPress={() => navigation.navigate('AtracoesSaoPaulo')}
          >
            <Text style={styles.buttonText}>Atrações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.secondButton]}
            onPress={() => navigation.navigate('DetailsScreenSaoPaulo')}
          >
            <Text style={[styles.buttonText, styles.secondButtonText]}>Pontos Turísticos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20, // Adiciona espaçamento ao redor do conteúdo
  },
  content: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontWeight: '100',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    width: '100%',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'white',
    marginBottom: 20, // Ajustado o espaçamento abaixo do texto
    width: '100%',
    paddingHorizontal: 10, // Adiciona padding horizontal para evitar que o texto encoste nas bordas
  },
  imageLarge: {
    width: Dimensions.get('window').width - 40, // Ajustado para garantir que a imagem não ocupe toda a largura
    height: Dimensions.get('window').height * 0.3,
    marginBottom: 20, // Espaçamento entre a imagem e o texto
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15, // Adiciona padding horizontal para espaçamento dos botões
    marginBottom: 20, // Espaçamento abaixo dos botões
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  firstButton: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50, // Altura dos botões ajustada
    width: Dimensions.get('window').width * 0.4, // Largura dos botões ajustada
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: 50, // Altura dos botões ajustada
    width: Dimensions.get('window').width * 0.4, // Largura dos botões ajustada
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Texto do primeiro botão
    textAlign: 'center',
  },
  secondButtonText: {
    color: '#370e43', // Texto do segundo botão
  },
});

export default DetalhesSaoPaulo;