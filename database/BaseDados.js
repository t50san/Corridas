import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const STORAGE_KEY = 'Corridas'; 

const serializeData = (data) => JSON.stringify(data);

function generateUUID() {
  const randomBytes = new Uint8Array(16);
  for (let i = 0; i < randomBytes.length; i++) {
    randomBytes[i] = Math.floor(Math.random() * 256); 
  }

  const hexBytes = [];
  for (const byte of randomBytes) {
    hexBytes.push(byte.toString(16).padStart(2, '0')); 
  }

  const uuid =
    hexBytes[0] +
    hexBytes[1] +
    '-' +
    hexBytes[2] +
    hexBytes[3] +
    '-' +
    hexBytes[4] +
    hexBytes[5] +
    '-' +
    hexBytes[6] +
    hexBytes[7] +
    '-' +
    hexBytes[8] +
    hexBytes[9] +
    hexBytes[10] +
    hexBytes[11] +
    hexBytes[12] +
    hexBytes[13] +
    hexBytes[14] +
    hexBytes[15];

  return uuid;
}

const deserializeData = async (data) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing stored data:', error);
    return null; 
  }
};

const adicionarCorrida = async (ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao) => {
  try {
    console.log("Entrei");
    const corridas = await getAllCorridas(); 

    var numCorridasDoc = corridas.filter(corrida => corrida.ndoc == ndoc).length;

    if(numCorridasDoc > 0) {
      Alert.alert("Erro esse numero já existe!");
      return;
    }

    var id = generateUUID();

    const newCorrida = { id, ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao };
    corridas.push(newCorrida); 

    const serializedCorridas = serializeData(corridas); 

    console.log("serializedCorridas", serializedCorridas)

    await AsyncStorage.setItem(STORAGE_KEY, serializedCorridas); 

    return {bool: true, data: newCorrida}; 
  } catch (error) {
    console.error('Erro ao adicionar corrida:', error);
    return;
  }
};

const listarCorridas = async (callback) => {
  try {
    console.log("In");
    const serializedCorridas = await AsyncStorage.getItem(STORAGE_KEY);
    const corridas = await deserializeData(serializedCorridas);

    callback(corridas || [], null); 
  } catch (error) {
    console.error('Erro ao listar corridas:', error);
    callback(null, error);
  }
};

const encontrarCorridaPorPassageiro = async (passageiro, callback) => {
  try {
    const corridas = await getAllCorridas();
    const foundCorrida = corridas.find((corrida) => corrida.passageiro === passageiro);
    callback(foundCorrida || null); 
  } catch (error) {
    console.error('Erro ao encontrar corrida por passageiro:', error);
    callback(null);
  }
};

const alterarCorrida = async (ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao, callback) => {
  try {
    const corridas = await getAllCorridas();
    const index = corridas.findIndex((corrida) => corrida.ndoc === ndoc);
    if (index !== -1) {
      corridas[index] = { ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao };

      const serializedCorridas = serializeData(corridas);
      await AsyncStorage.setItem(STORAGE_KEY, serializedCorridas);

      callback(true);
    } else {
      callback(false); 
    }
  } catch (error) {
    console.error('Erro ao alterar corrida:', error);
    callback(false);
  }
};

const excluirCorrida = async (id, callback) => {
  try {
    const corridas = await getAllCorridas();
    const filteredCorridas = corridas.filter((corrida) => corrida.id !== id);

    const serializedCorridas = serializeData(filteredCorridas);
    await AsyncStorage.setItem(STORAGE_KEY, serializedCorridas);

    callback({bool: true, data: filteredCorridas});
  } catch (error) {
    console.error('Erro ao excluir corrida:', error);
    callback(false);
  }
};

const getAllCorridas = async () => {
  console.log("serializedCorridas")
  const serializedCorridas = await AsyncStorage.getItem(STORAGE_KEY);
  console.log(serializedCorridas)
  return await deserializeData(serializedCorridas) || [];
};

export { adicionarCorrida, listarCorridas, alterarCorrida, encontrarCorridaPorPassageiro, excluirCorrida };
