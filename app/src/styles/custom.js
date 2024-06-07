//import { SafeAreaView } from "react-native";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
     background-color: #E5E8E1; 
`;
//  background-color: rgb(277, 205, 128); 

export const TextTitle = styled.Text`
    padding: 10px;
    font-size: 22px;
    font-weight: 800;
    text-align: left;
`;

export const InputForm = styled.TextInput`
    background-color: #f5f5f5;
    width: 40%;
    margin-bottom: 15px;
    font-size: 20px;
    color: #222;
    border-radius: 6px;
    margin: 10px;
    padding: 10px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
    margin-top: 40px;
    background-color: #555655;
    width: 60%;
    padding: 15px;
    align-items: center;
    border-radius: 12px;
`;
// background-color: #eb1555;

export const TxtSubmitForm = styled.Text`
    color: #f5f5f5;
    font-size: 22px;
`;