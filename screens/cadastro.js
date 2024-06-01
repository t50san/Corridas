import { useState } from "react";
import { ScrollView } from "react-native";
import { Container, InputForm, TextTitle, BtnSubmitForm, TxtSubmitForm} from '../app/src/styles/custom';
import { adicionarCorrida } from "../database/BaseDados";

  const Cadastro = ({navigation}) => {
    const [dataCorrida, setDataCorrida] = useState('');
    const [valorRecebido, setValorRecebido] = useState('');
    const [meioPgto, setMeioPgto] = useState('');
    const [nDoc, setnDoc] = useState('');
    const [indicacao, setIndicacao] = useState('');
    const [fonteIndicacao, setFonteIndicacao] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [passageiro, setPassageiro] = useState('');

    const handleCadastro = () => {
        if (!nDoc || !passageiro || !valor) {
            alert('Preencha pelo menos o número do documento, passageiro e valor.');
            return;
        }

    adicionarCorrida(nDoc,passageiro,origem,destino, parseFloat(valorRecebido),dataCorrida,meioPgto,indicacao,fonteIndicacao, (id) => {
       if (id) {
            alert('Corrida cadastrada com sucesso!');
            navigation.navigate('HomeScreen');
        } else {
            alert('Erro ao cadastrar id.');
        }
        });
    navigation.navigate('HomeScreen');
    };
  

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>
            <Container>
                <TextTitle> 
                    Informe os dados da corrida
                    
                </TextTitle>
                <InputForm
                    placeholder="Nº Doc"
                    value={nDoc}
                    onChangeText={text => setnDoc(text)}
                />
                <InputForm
                    placeholder="Passageiro"
                    value={passageiro}
                    onChangeText={text => setPassageiro(text)}
                />
                <InputForm
                    placeholder="Origem"
                    value={origem}
                    onChangeText={text => setOrigem(text)}
                />
                    <InputForm
                    placeholder="Destino"
                    value={destino}
                    onChangeText={text => setDestino(text)}
                />
                <InputForm
                    placeholder="Data"
                    value={dataCorrida}
                    onChangeText={text => setDataCorrida(text)}
                />
                  <InputForm
                    placeholder="Valor"
                    value={valorRecebido}
                    onChangeText={text => setValorRecebido(text)}
                />
                 <InputForm
                    placeholder="Meio Pgto"
                    value={meioPgto}
                    onChangeText={text => setMeioPgto(text)}
                />
            
                 <InputForm
                    placeholder="Indicação"
                    value={indicacao}
                    onChangeText={text => setIndicacao(text)}
                />
                 <InputForm
                    placeholder="Fonte da Indicação"
                    value={fonteIndicacao}
                    onChangeText={text => setFonteIndicacao(text)}
                />
                
                <BtnSubmitForm onPress={adicionarCorrida}>
                    <TxtSubmitForm>
                        Salvar
                    </TxtSubmitForm>
                </BtnSubmitForm>

                </Container>                     
            </ScrollView>
          );
}

export default Cadastro;