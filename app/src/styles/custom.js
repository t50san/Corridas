import styled from "styled-components"  ;

//export para usar no outro arquivo, o app.js
export const Container = styled.SafeAreaView`
    //tornar um item flexível dentro do container, valor 1 para ocupar todo o espaço da tela
    flex: 1; 
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.View`
    padding: 30px 0;
`;

export const ImageLogo = styled.View`
    padding: 30px 0;
`;

export const TextExe = styled.Text`
    padding: 20px;
    font-size: 26px;
`;