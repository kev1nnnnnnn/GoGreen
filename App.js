import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Plants from './src/pages/Plants/';
import Information_1 from './src/pages/Information/carnosos';
import Information_2 from './src/pages/Information/citricas';
import Information_3 from './src/pages/Information/secas';

const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Plants" component={Plants}/>
        <Stack.Screen name="Carnosos" component={Information_1}/>
        <Stack.Screen name="Secas" component={Information_2}/>
        <Stack.Screen name="Citricas" component={Information_3}/>
      </Stack.Navigator>
    </NavigationContainer>


  );
}


