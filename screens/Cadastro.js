import { useState, React } from "react";
import { Button, Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Container, InputForm, TextTitle, BtnSubmitForm, TxtSubmitForm} from '../app/src/styles/custom';
import { adicionarCorrida } from "../database/BaseDados";
import DateTimePicker from "react-native-modal-datetime-picker";
import { SelectList } from 'react-native-dropdown-select-list';

  const Cadastro = ({navigation}) => {
    const [dataCorrida, setDataCorrida] = useState(null);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [valorRecebido, setValorRecebido] = useState('');
    const [meioPgto, setMeioPgto] = useState('');
    const [nDoc, setnDoc] = useState('');
    const [indicacao, setIndicacao] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [passageiro, setPassageiro] = useState('');
    const [fonteIndicacao, setFonteIndicacao] = useState('');
    
    
    const handleCadastro = () => {
        var valorRecebidoFloat = parseFloat(valorRecebido)

        if (!nDoc || !passageiro || !valorRecebidoFloat) {
            alert('Preencha pelo menos o número do documento, passageiro e valor.');
            return;
        }

        adicionarCorrida(nDoc,passageiro,origem,destino, valorRecebidoFloat,dataCorrida.toISOString(),meioPgto,indicacao,fonteIndicacao);
        navigation.navigate('Home');
    };

    const formatCurrency = (inputValue) => {
        const numericValue = parseFloat(inputValue.replace(/[^0-9]/g, '')); // Remove caracteres não numéricos
        if (isNaN(numericValue)) return ''; // Se não for um número válido, retorna vazio
        return `R$ ${numericValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    };

    const data = [
        {key:'1', value:'Uber'},
        {key:'2', value:'Cooperativa'},
        {key:'3', value:'Avulso'}
    ]
  

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container style={{flexDirection: 'row',  flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
                <TextTitle> 
                    Informe os dados da corrida
                </TextTitle>
                <InputForm
                    placeholder="NF/Recibo"
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
                    autocomplete="origem"
                    value={origem}
                    onChangeText={text => setOrigem(text)}
                />
                <InputForm
                    placeholder="Destino"
                    value={destino}
                    onChangeText={text => setDestino(text)}
                />
                 <InputForm
                    placeholder="Valor"
                    value={valorRecebido}
                    keyboardType={'decimal-pad'}
                    onChangeText={text => {setValorRecebido(text); console.log(text)}}
                />
                <View style={{
                    width: "40%",
                    margin: 10,
                    marginBottom: 10,
                    height: 45,
                    padding: 10,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 5,
                    color: "#222",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)} >
                            <Text style={{fontSize: 13, color: "grey"}}>
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
                    placeholder="Meio Pgto"
                    value={meioPgto}
                    onChangeText={text => setMeioPgto(text)}
                />
                <InputForm
                    placeholder="Indicação"
                    value={indicacao}
                    onChangeText={text => setIndicacao(text)}
                />
                <View style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 20, width: Dimensions.get('window').width}}>
                    <SelectList
                        boxStyles={{display: "flex", backgroundColor: '#f5f5f5'}}
                        dropdownStyles={{display: "flex", backgroundColor: '#f5f5f5'}}
                        inputStyles={{display: "flex"}}
                        placeholder="Fonte de Indicação"
                        data={data}
                        save="value"
                        setSelected={(value) => setFonteIndicacao(value)}
                    />
                </View>
                <BtnSubmitForm onPress={handleCadastro}>
                    <TxtSubmitForm>
                        Salvar
                    </TxtSubmitForm>
                </BtnSubmitForm>

                </Container>                     
            </ScrollView>
          );
}

export default Cadastro;