import { useState } from "react";
import { ScrollView } from "react-native";
import { Container, InputForm, TextTitle, BtnSubmitForm, TxtSubmitForm} from '../app/src/styles/custom';

export default function App() {
    const [dataCorrida, setDataCorrida] = useState('');
    const [valorRecebido, setValorRecebido] = useState('');
    const [meioPgto, setMeioPgto] = useState('');
    const [numDoc, setNumDoc] = useState('');
    const [indicacao, setIndicacao] = useState('');
    const [fonteIndicacao, setFonteIndicacao] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [passageiro, setPassageiro] = useState('');

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>
            <Container>
                <TextTitle> 
                    Informe os dados da corrida
                    
                </TextTitle>
                <InputForm
                    placeholder="Nº Doc"
                    value={numDoc}
                    onChangeText={text => setNumDoc(text)}
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
                
                <BtnSubmitForm>
                    <TxtSubmitForm>
                        Salvar
                    </TxtSubmitForm>
                </BtnSubmitForm>

                </Container>                     
            </ScrollView>
          );
}