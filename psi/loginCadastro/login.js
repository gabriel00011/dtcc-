import React, { useState } from "react"

import {
    View, SafeAreaView, TextInput,
    Button, TouchableHighlight, ScrollView
} from "react-native"

import { RadioButton } from "react-native-paper"

import { Text } from "react-native-elements"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FuncLogin, Cadastrar } from "../functions/login"

// importação tela cadastroPsi
import CadastroPsi from "./cadastroPsi/cadastro"

// importação da estilização Tela Login
import { estilo } from "../css/login"

const Stack = createNativeStackNavigator()

export default ({ navigation }) => {

    const [emailValue, setEmailInput] = useState("")
    const [passwordValue, setPasswordInput] = useState("")
    const [checked, setChecked] = useState("second")

    FuncLogin(emailValue, passwordValue)

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

                        <View value="Paciente" style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <RadioButton
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                                status={checked === "masculino" ? "checked" : "unchecked"}
                                onPress={() => setChecked('masculino')} />
                            <Text style={{ fontSize: 15 }}>Paciente   </Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: -20 }}>
                            <RadioButton
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                                status={checked === 'feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('feminino')} value="Psicologo"
                            /><Text style={{ fontSize: 15 }}>Psicologo </Text>
                        </View>

                        <View style={estilo.InputsSession}>

                            <TextInput style={estilo.Inputs} onChangeText={(email) => setEmailInput(email)}
                                placeholder=" E-mail" />
                            <Text></Text>

                            <TextInput style={estilo.Inputs} onChangeText={(password) => setPasswordInput(password)}
                                secureTextEntry={true} placeholder=" Senha" />

                        </View>

                        <TouchableHighlight underlayColor="#6A5ACD" onPress={() => Cadastrar()}>
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