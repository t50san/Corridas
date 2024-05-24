//import { SafeAreaView } from "react-native";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: rgb(277, 205, 128);  
`;

export const TextTitle = styled.Text`
    padding: 10px;
    font-size: 18px;
    text-align: left;
`;

export const InputForm = styled.TextInput`
    background-color: #f5f5f5;
    width: 50%;
    margin-bottom: 15px;
    font-size: 20px;
    color: #222;
    border-radius: 6px;
    padding: 10px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
    background-color: #eb1555;
    width: 60%;
    padding: 15px;
    align-items: center;
    border-radius: 12px;
`;
export const TxtSubmitForm = styled.Text`
    color: #f5f5f5;
    font-size: 22px;
`;