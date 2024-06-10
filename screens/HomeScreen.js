import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

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
      <Image source={require("../assets/HS.jpeg")} style={{width: 250, height: 250, borderRadius: 10, marginBottom: 10}}/>
      <Text style={styles.title}>Corridas</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCadastro}  style={{padding: 20, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10, borderColor: "grey"}}>
          <Image source={require("../assets/icone_cadastro.jpeg")} style={{width: 80, height: 80}}/>
          <Text>
            Cadastrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleVisualizarTodos} style={{padding: 20, marginLeft: 20, justifyContent: "center", alignItems: "center", borderWidth: 1, borderRadius: 10, borderColor: "grey"}}>
          <Image source={require("../assets/visualizar_cadastro.jpeg")} style={{width: 80, height: 80}}/>
          <Text>
            Visualizar
          </Text>
        </TouchableOpacity>
        {/* <Button title="Visualizar uma corrida" color="#5BC0DE" onPress={handleVisualizarUm}/> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F2EF",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default HomeScreen;