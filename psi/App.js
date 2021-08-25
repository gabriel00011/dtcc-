import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"


// importação de telas login
import Login from "./loginCadastro/login"
import CadastroPsi from "./loginCadastro/cadastroPsi/cadastro"
import GerenciarCadastroPsi from "./GerenciarCadastro/Psicologo/GerenciarCadastro"
import GerenciarCadastroPac from "./GerenciarCadastro/Paciente/TelaGerenciarPac"
import TelaPerfilPaci from './PerfilPac/TelaPerfilPac1'
import TelaPerfilPsi from "./PerfilPsi/TelaPerfilPsi1"
import TelaAgendaPsi from "./GerenciarAgenda/TelaAgendaPsi"
import Map from "./Mapa/mapa1"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="TelaPerfilPsi" component={TelaPerfilPsi} /> */}
          {/* {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="cadastroPsi" component={CadastroPsi} /> */}
          {/* <Stack.Screen name="GerenciarCadastroPsi" component={GerenciarCadastroPsi} /> */}
          {/* <Stack.Screen name="GerenciarCadastroPac" component={GerenciarCadastroPac} /> */}
          {/* <Stack.Screen name="TelaPerfil1" component={TelaPerfilPaci} /> */}
          <Stack.Screen name="Mapa" component={Map} />
          {/* <Stack.Screen name="TelaAgendaPsi" component={TelaAgendaPsi} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

