import React from "react"

import { View, SafeAreaView, TextInput, Button, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

// importação tela cadastroPsi
import CadastroPsi from "./cadastroPsi/cadastro"

// importação da estilização Tela Login
import { estilo } from "../css/login"

const Stack = createNativeStackNavigator()

export default ({ navigation }) => {
    return (
        // Elemento pai
        <SafeAreaView style={estilo.Main}>

            {/* Centralização ao elemento pai */}
            <View style={estilo.MainChildren}>

                {/* Logo  */}
                <View style={estilo.Logo}>
                    <Text h1>Logo</Text>
                </View>

                <View style={estilo.ButtonSession}>

                    <Text style={{
                        color: "#6A5ACD", borderColor: "#6A5ACD", borderBottomWidth: 5,
                        padding: 10
                    }} h4>Login</Text>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("cadastroPsi")}>
                        <View>
                            <Text h4>Cadastrar</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* Footer */}
                <ScrollView >
                    <View style={estilo.Footer}>
                        <Text>Radiobutton Psicologo</Text>
                        <Text>Radiobutton Paciente</Text>

                        <View style={estilo.InputsSession}>
                            <TextInput style={estilo.Inputs} placeholder=" E-mail" />
                            <Text></Text>
                            <TextInput style={estilo.Inputs} placeholder=" Senha" />
                        </View>
                        <TouchableHighlight underlayColor="#6A5ACD">
                            <View style={estilo.ButtonLogIn}>
                                <Text style={{ color: "white" }} h4>Entrar</Text>
                            </View>
                        </TouchableHighlight>

                        <Text>Esqueceu a senha ?</Text>

                        <TouchableHighlight >
                            <View>
                                <Text>Clique aqui</Text>
                            </ View>
                        </TouchableHighlight>

                    </View>
                </ScrollView>

            </View>

        </SafeAreaView >
    )
}