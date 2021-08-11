import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"


// importação de telas login
import Login from "./loginCadastro/login"
import CadastroPsi from "./loginCadastro/cadastroPsi/cadastro"
import Cadastro from "./GerenciarCadastro/GerenciarCadastro"

export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="cadastroPsi" component={CadastroPsi} /> */}
          <Stack.Screen name="GerenciarCadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

