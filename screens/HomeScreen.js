import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  const handleVisualizarTodos = () => {
    navigation.navigate('VisualizarTodos');
  };
  const handleAlterar = () => {
    navigation.navigate('Alterar');
  };
  const handleExcluir = () => {
    navigation.navigate("Excluir");
  };
  const handleVisualizarUm = () => {
    navigation.navigate("VisualizarUm")
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/HS.jpeg")} style={{width: 150, height: 150, borderRadius: 10, marginBottom: 10}}/>
      <Text style={styles.title}>MotoSmart</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" color="#007BFF" onPress={handleCadastro} />
        {/* <Button title="Visualizar uma corrida" color="#5BC0DE" onPress={handleVisualizarUm}/> */}
        <Button title="Visualizar Todos" color="#5BC0DE" onPress={handleVisualizarTodos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;