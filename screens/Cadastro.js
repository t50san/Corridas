import { useState, React } from "react";
import { Alert, Button, Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    const [error, setError] = useState(false);
    
    
    const handleCadastro = async () => {
        var valorRecebidoFloat = parseFloat(valorRecebido)

        if (!nDoc || !passageiro || !valorRecebidoFloat) {
            alert('Preencha pelo menos o número do documento, passageiro e valor.');
            setError(true);
            return;
        }

        if(dataCorrida) {
            dataCorrida = dataCorrida.toISOString();
        }

        var response = await adicionarCorrida(nDoc,passageiro,origem,destino, valorRecebidoFloat,dataCorrida,meioPgto,indicacao,fonteIndicacao);

        console.log("response", response)

        if(response && response.bool) {
            Alert.alert("Cadastrado com sucesso")
            navigation.navigate('Home');
        } else {
            Alert.alert("Erro ao cadastrar, preencha os campos obrigatórios");
            setError(true);
        }

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

    const dataMeio = [
        {key:'1', value:'App'},
        {key:'2', value:'Debito'},
        {key:'3', value:'Credito'},
        {key:'4', value:'Pix'},
        {key:'5', value:'Especie'}
    ]

    const inputStyle = {
        backgroundColor: "#f5f5f5",
        width: "40%",
        marginBottom: 15,
        fontSize: 20,
        color: "#222",
        borderRadius: 6,
        margin: 10,
        padding: 10,
    }

    const inputRequiredStyle = {
        backgroundColor: "#f5f5f5",
        width: "40%",
        marginBottom: 15,
        fontSize: 20,
        color: "#222",
        borderRadius: 6,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red'      
    }

    const inputPassageiroStyle = {
        backgroundColor: "#f5f5f5",
        width: "85%",
        marginBottom: 15,
        fontSize: 20,
        color: "#222",
        borderRadius: 6,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red'
    }
  

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container style={{flexDirection: 'row',  flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
                <TextTitle> 
                    Informe os dados da corrida
                </TextTitle>
                <TextInput 
                    style={inputRequiredStyle}
                    placeholder="NF/Recibo"
                    value={nDoc}
                    onChangeText={text => setnDoc(text)}
                />
                <TextInput 
                    style={inputPassageiroStyle}
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
                 <TextInput
                    style={inputRequiredStyle}
                    placeholder="Valor"
                    value={valorRecebido}
                    keyboardType={'decimal-pad'}
                    onChangeText={text => {setValorRecebido(text); console.log(text)}}
                />
                {/*<SelectList
                    placeholder="Meio Pg"
                    boxStyles={{justifyContent: "left", alignItems: "left",width: '100%', marginBottom: 15, marginRight: 30, backgroundColor: '#f5f5f5', borderWidth: 0}}
                    dropdownStyles={{display: 'flex', backgroundColor: '#f5f5f5'}}
                    inputStyles={{display: 'flex', fontSize: 20, borderWidth: 0}}
                    data={dataMeio}
                    save="value"
                    setSelected={(value) => setMeioPgto(value)}
                />*/}
                <InputForm
                    placeholder="Meio Pg"
                    value={meioPgto}
                    onChangeText={text => setMeioPgto(text)}
                />
                
                <View style={{
                    width: "85%",
                    margin: 10,
                    marginBottom: 10,
                    padding: 10,
                    backgroundColor: "#f5f5f5",
                    borderRadius: 5,
                    color: "#222",
                    justifyContent: "center",
                    alignItems: "left" //posiçao do texto da data
                }}>
                    <TouchableOpacity onPress={() => setDatePickerVisible(true)} >
                            <Text style={{fontSize: 20, color: '#222'}}>
                            {
                                dataCorrida
                                ?
                                `${dataCorrida.toLocaleDateString('pt-BR')} ${dataCorrida.toLocaleTimeString('pt-BR')}`
                                :
                                "Data"
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
                <SelectList
                    style={{width: "85%"}}
                    placeholder="Fonte"
                    boxStyles={{justifyContent: "center", alignItems: "left", width: '100%',  marginBottom: 15, padding: 1, display: "flex", backgroundColor: '#f5f5f5', borderWidth: 0}}
                    dropdownStyles={{width: '70%',display: "flex", backgroundColor: '#f5f5f5'}}
                    inputStyles={{display: "flex", fontSize: 20, borderWidth: 0}}
                    data={data}
                    save="value"
                    setSelected={(value) => setFonteIndicacao(value)}
                />
                
                <InputForm
                    style={{width: "85%"}}
                    placeholder="Indicação"
                    value={indicacao}
                    onChangeText={text => setIndicacao(text)}
                />
                
                <BtnSubmitForm onPress={(e) => {
                    handleCadastro(e);
                }}>
                    <TxtSubmitForm>
                        Salvar
                    </TxtSubmitForm>
                </BtnSubmitForm>

                </Container>                     
            </ScrollView>
          );
}

export default Cadastro;