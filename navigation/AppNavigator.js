import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import cadastro from '../screens/cadastro';

{/* */}
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={cadastro}
            options={{ title: 'Cadastro de Corrida' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default AppNavigator;