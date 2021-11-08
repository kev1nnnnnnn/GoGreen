import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

//Realiza a importação dos navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Realiza a importação das pages que serão utilizadas através da navegação
import Plants from './src/pages/Plants/';
import Information_1 from './src/pages/Information/carnosos';
import Information_2 from './src/pages/Information/citricas';
import Information_3 from './src/pages/Information/secas';

//Variável declarada para navegação do tipo *STACK*
const Stack = createStackNavigator();

export default function App() {

  return (
    
    //Criada primeiro a tag NavigationContainer, em seguida informa o tipo de naveção que será utilizada no app
    <NavigationContainer >
      <Stack.Navigator >
        {/*Realiza a chamada da Stack.Screen passando o nome e o componente de acordo com as funções criada nos outros arquivos da pasta Information */}
        <Stack.Screen name="Plantas" component={Plants}/>
        <Stack.Screen name="Carnosos" component={Information_1}/>
        <Stack.Screen name="Secas" component={Information_2}/>
        <Stack.Screen name="Citricas" component={Information_3}/>
      </Stack.Navigator>
      {/* Informa a cor que será o topo do seu dispositivo*/}
      <StatusBar 
        backgroundColor="#20B2AA"
      />
    </NavigationContainer>


  );
}

const  styles = StyleSheet.create({

  appTitle: {
    backgroundColor: "#111",
  }

});


