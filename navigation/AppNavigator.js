import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import cadastro from '../screens/Cadastro';
import VisualizarTodos from '../screens/VisualizarTodos';
import Excluir from '../screens/Excluir';
import Alterar from '../screens/Alterar';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: '' }}
          />
          <Stack.Screen
          name="Cadastro"
          component={cadastro} 
          options={{ title: 'Cadastro de corrida' }}
        />
        <Stack.Screen
          name="VisualizarTodos" 
          component={VisualizarTodos} 
          options={{ title: 'Corridas Cadastradas' }}
        /> 
        <Stack.Screen
          name="Alterar" 
          component={Alterar} 
          options={{ title: 'Alterar' }}
        />
        <Stack.Screen
          name="Excluir" 
          component={Excluir} 
          options={{ title: 'Excluir' }} 
        />{/**/}
        
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;