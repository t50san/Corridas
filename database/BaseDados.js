import { openDatabase }  from 'expo-sqlite';

const db = openDatabase('Corridas.db');

db.transaction((tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS corridas 
     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      passageiro TEXT, 
      origem TEXT, 
      destino TEXT, 
      valor REAL, 
      data TEXT,
      ndoc REAL,
      meioPG TEXT,
      indicacao TEXT,
      fonteIndicacao TEXT    
    );`
  );
});

const adicionarCorrida = (ndoc, passageiro,origem, destino, valor, data, meioPG, indicacao, fonteIndicacao, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO corridas ( passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao) VALUES (?, ?, ?, ?)',
    [ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao],
    (_, result) => {
        callback(result.insertId);
      },
      (_, error) => {
        console.error('Erro ao adicionar corrida:', error);
        callback(null);
      }
    );
  });
};

const listarCorridas = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM corridas', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

const encontrarCorridaPorPassageiro = (passageiro, callback) => {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM corridas WHERE passageiro = ?', [nome], (_, { rows }) => {
            if (rows.lenght > 0) {
            callback(rows._array[0]);
      } else {
        callback(null);
      }
    });
  });
};

const alterarCorrida = (ndoc, passageiro, origem, destino, valor, data, meioPG, indicacao, fonteIndicacao, callback) => {
  db.transaction((tx) => {
    const sql = 'UPDATE corrida SET ndoc = ?, passageiro = ?,origem = ?, destino = ?, valor = ?, data = ?, meioPG = ?, indicacao = ?, fonteIndicacao = ? WHERE id = ?';
    const params = [ndoc, passageiro,origem, destino, valor, data, meioPG, indicacao, fonteIndicacao];
    
    tx.executeSql(
      sql,
      params,
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao alterar corrida:', error);
        callback(0);
      }
    );
  });
};

const excluirCorrida = (passageiro, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM corrida WHERE id = ?',
      [id],
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao excluir corrida:', error);
        callback(0);
      }
    );
  });
};

export { adicionarCorrida, listarCorridas, alterarCorrida, encontrarCorridaPorPassageiro, excluirCorrida };