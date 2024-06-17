import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const imgbackground='../assets/corolla3x4.jpeg'
const HomeScreen = ({ navigation }) => {
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  const handleVisualizarTodos = () => {
    navigation.navigate('VisualizarTodos');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require(imgbackground)} 
        style={{flex: 1, resizeMode:'cover', width:'100%'}}
      >
        <Text style={styles.title}> Corridas </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleCadastro}  
            style={{padding: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'grey'}}>
            {/*<Image source={require("../assets/icone_cadastro.jpeg")} style={{width: 80, height: 80, borderRadius: 10,}}/>*/}
            <Text style={{fontSize: 20}}> Cadastrar </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleVisualizarTodos} style={{padding: 20, marginLeft: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'grey'}}>
          {/*<Image source={require("../assets/visualizar_cadastro.jpeg")} style={{width: 80, height: 80}}/>*/}
            <Text style={{fontSize: 20}}> Visualizar </Text>
          </TouchableOpacity>
         </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2EF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#F1F2EF'
  },
});

export default HomeScreen;