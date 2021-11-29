import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"


// importação de telas para navegação
import Login from "./loginCadastro/login"
import CadastroPsi from "./loginCadastro/cadastroPsi/cadastro"
import GerenciarCadastroPsi from "./GerenciarCadastro/Psicologo/GerenciarCadastro"
import GerenciarCadastroPac from "./GerenciarCadastro/Paciente/TelaGerenciarPac"
import TelaPerfilPaci from './PerfilPac/TelaPerfilPac1'
import TelaPerfilPsi from "./PerfilPsi/TelaPerfilPsi1"
import TelaAgendaPsi from "./GerenciarAgenda/TelaAgendaPsi"
import Map from "./Mapa/mapa1"
import Card from "./Gcard/Card1"
import Card2 from "./Gcard/Card2"
import SessaoPsi from './Sessao/SessaoPsi';



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="cadastroPsi" component={CadastroPsi} />

          <Stack.Screen name="Mapa" component={Map} />
          <Stack.Screen name="GerenciarCadastroPac" component={GerenciarCadastroPac} />
          <Stack.Screen name="TelaPerfil1" component={TelaPerfilPaci} />
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="Card2" component={Card2} />
          <Stack.Screen name="sessionPSi" component={SessaoPsi} />

          <Stack.Screen name="TelaAgendaPsi" component={TelaAgendaPsi} />
          <Stack.Screen name="TelaPerfilPsi" component={TelaPerfilPsi} />
          <Stack.Screen name="GerenciarCadastroPsi" component={GerenciarCadastroPsi} />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}

