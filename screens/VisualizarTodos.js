import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { listarCorridas } from '../database/BaseDados';

const VisualizarTodos = () => {
  const [corridas, setCorridas] = useState([]);
  useEffect(() => {
    listarCorridas((corridas) => {
      setCorridas(corridas);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualizar Todos</Text>
      <FlatList
        data={corridas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Nº doc: {item.ndoc}</Text>
            <Text>Passageiro: {item.passageiro}</Text>
            <Text>Origem: {item.origem}</Text>
            <Text>Destino: {item.destino}</Text>
            <Text>Valor: {item.valor}</Text>
            <Text>Data: {item.data}</Text>
            <Text>meio de pagamento: {item.meioPG}</Text>
            <Text>Indicação: {item.indicacao}</Text>
            <Text>Fonte da indicação: {item.fonteIndicacao}</Text>
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
  },
  item: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default VisualizarTodos;