import { useEffect, useState } from "react";
import { Alert, Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Container, InputForm, TextTitle, BtnSubmitForm, TxtSubmitForm} from '../app/src/styles/custom';
import { adicionarCorrida, alterarCorrida } from "../database/BaseDados";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "react-native-modal-datetime-picker";

  const Alterar = ({navigation}) => {
    const [dataCorrida, setDataCorrida] = useState(null);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [valorRecebido, setValorRecebido] = useState('');
    const [meioPgto, setMeioPgto] = useState('');
    const [nDoc, setnDoc] = useState('');
    const [indicacao, setIndicacao] = useState('');
    const [fonteIndicacao, setFonteIndicacao] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [passageiro, setPassageiro] = useState('');

    const handleCadastro = () => {
        var valorRecebidoFloat = parseFloat(valorRecebido)

        if (!nDoc || !passageiro || !valorRecebidoFloat) {
            alert('Preencha pelo menos o número do documento, passageiro e valor.');
            return;
        }

        alterarCorrida(nDoc,passageiro,origem,destino, valorRecebidoFloat,dataCorrida.toISOString(),meioPgto,indicacao,fonteIndicacao, (response) => {
            if(response) {
                Alert.alert("Alterado com sucesso")
            } else {
                Alert.alert("Não foi possível alterar")
            }
        });
        navigation.navigate('Home');
    };

    useEffect(() => {
        var item = navigation.getState().routes.filter(route => route.name == "Alterar")[0].params;
        var corrida = item.corrida;
        setDataCorrida(new Date(corrida.data))
        setDestino(corrida.destino)
        setFonteIndicacao(corrida.fonteIndicacao)
        setMeioPgto(corrida.meioPG)
        setnDoc(corrida.ndoc)
        setOrigem(corrida.origem)
        setPassageiro(corrida.passageiro)
        setValorRecebido(JSON.stringify(corrida.valor))
        console.log("corrida", corrida)
    }, [])
  

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
                <View style={{
                    width: "50%",
                    marginBottom: 10,
                    padding: 10,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 5,
                    color: "#222",
                }}>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
                            <Text style={{fontSize: 15, color: "grey"}}>
                            {
                                dataCorrida
                                ?
                                `${dataCorrida.toLocaleDateString('pt-BR')} ${dataCorrida.toLocaleTimeString('pt-BR')}`
                                :
                                "Selecione a Data"
                            }
                            </Text>
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    isVisible={datePickerVisible}
                    onTouchEnd={() => {console.log("teste")}}
                    onConfirm={(e) => {
                        console.log("Confirmei")
                        setDataCorrida(e);
                        setDatePickerVisible(false); 
                    }}
                    onCancel={() => setDatePickerVisible(false)}
                    value={new Date()}
                    mode="datetime"
                    locale="en_GB" 
                    is24Hour={true}
                    
                />
                <InputForm
                    placeholder="Valor"
                    value={valorRecebido}
                    keyboardType={'numeric'}
                    onChangeText={text => setValorRecebido(text.replace(/[^0-9]/g, '').slice(-2))}
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
                
                <BtnSubmitForm onPress={handleCadastro}>
                    <TxtSubmitForm>
                        Salvar
                    </TxtSubmitForm>
                </BtnSubmitForm>

                </Container>                     
        </ScrollView>
    );
}

export default Alterar;