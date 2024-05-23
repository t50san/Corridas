import { useState } from "react";
import { ScrollView } from "react-native";
import { Container, InputForm, TextTitle} from '../app/src/styles/custom';

export default function App() {
    const [dataCorrida, setDataCorrida] = useState('');
    const [valorRecebido, setValorRecebido] = useState('');
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}}>
            <Container>
                <TextTitle>
                    Cadastro da corrida
                    
                </TextTitle>
                <InputForm
                    placeholder="Data (ex.: 22/05/2024)"
                    value={dataCorrida}
                    onChangeText={text => setDataCorrida}
                />
                 <InputForm
                    placeholder="Valor"
                    value={valorRecebido}
                    onChangeText={text => setValorRecebido}
                />
                </Container>                     
            </ScrollView>
          );
}