import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/screens/Home.js';
import { Dolar} from './src/screens/Dolar.js';
import { Euro } from './src/screens/Euro.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home}
            options={{
              title: "Conversor de moeda da Jess",
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
         <Stack.Screen name='Dolar' component={Dolar}
            options={({ navigation }) => ({
              title: 'Dolar',
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
             
            })} /> 
             <Stack.Screen name='Euro' component={Euro}
            options={({ navigation }) => ({
              title: 'Euro',
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
             
            })} /> 
       </Stack.Navigator>
      </NavigationContainer>
   
  );
}



export default App;