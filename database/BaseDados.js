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

const adicionarCorrida = (passageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacao, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO corridas (passageiro, origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacao) VALUES (?, ?, ?, ?)',
    [passageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacao],
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

/*const alterarJogo = (idpassageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacao=> {
  db.transaction((tx) => {
    const sql = 'UPDATE jogos SEpassageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacaoobre = ? WHERE id = ?';
    const params =passageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacaotx.executeSql(
      sql,
      params,
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao alterar jogo:', error);
        callback(0);
      }
    );
  });
};

const excluirJogo = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM jogos WHERE id = ?',
      [id],
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao excluir jogo:', error);
        callback(0);
      }
    );
  });
};

export { adicionarJogo, listarJogos, alterarJogo, encontrarJogoPpassageiro,origem, destino, valor, data, ndoc, meioPG, indicacao, fonteIndicacao