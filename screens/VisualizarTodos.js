import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { excluirCorrida, listarCorridas } from '../database/BaseDados';

const VisualizarTodos = ({navigation}) => {
  const [corridas, setCorridas] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    console.log("Alow")
    listarCorridas((corridas) => {
      setCorridas(corridas);
      var valorTotalAux = 0;

      corridas.map((corrida) => {
        valorTotalAux += corrida.valor;
      })

      setValorTotal(valorTotalAux);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Corridas cadastradas</Text>*/}
      {
        corridas && corridas.length > 0
        ?
          <Text style={styles.resultado}>Total de corridas: {corridas.length}</Text>
        : 
         <></>
      }
      {
        <Text style={styles.resultado}>Valor total das corridas: R${valorTotal}</Text>
      }
      
      <FlatList
        data={corridas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textItem}>Nº NF/Recibo: {item.ndoc}</Text>
            <Text style={styles.textItem}>Passageiro: {item.passageiro}</Text>
            <Text style={styles.textItem}>Origem: {item.origem}</Text>
            <Text style={styles.textItem}>Destino: {item.destino}</Text>
            <Text style={styles.textItem}>Valor: {item.valor}</Text>
            <Text style={styles.textItem}>Data: {item.data ? `${(new Date(item.data)).toLocaleDateString('pt-br')} ${(new Date(item.data)).toLocaleTimeString('pt-br')}` : ""}</Text>
            <Text style={styles.textItem}>meio de pagamento: {item.meioPG}</Text>
            <Text style={styles.textItem}>Indicação: {item.indicacao}</Text>
            <Text style={styles.textItem}>Fonte: {item.fonteIndicacao}</Text>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={() => excluirCorrida(item.id, (response) => {
                if(response && response.bool) {
                  Alert.alert("Removido com sucesso")
                  setCorridas(response.data)
                } else {
                  Alert.alert("Erro ao remover")
                }
              })} style={{padding: 10,marginRight: 20, borderWidth: 1, borderColor: "black", borderRadius: 3, width: "30%", alignItems: "center", marginTop: 10}}>
                <Text>
                  Remover
                </Text>
                
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Alterar", {
                corrida: item
              })} style={{padding: 10, borderWidth: 1, borderColor: "black", borderRadius: 3, width: "30%", alignItems: "center", marginTop: 10}}>
                <Text>
                  Alterar
                </Text>
              </TouchableOpacity>
            </View>

            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',    
    marginBottom: 20
  },
  resultado: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'right'
  },
  item: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  textItem: {
    fontSize: 16,
    textAlign: 'left'
  }
});

export default VisualizarTodos;