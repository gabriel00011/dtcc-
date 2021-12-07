import React, { useState } from "react"

const { firebase } = require("../functions/CadastroPsicologo")

import {
    View, SafeAreaView, TextInput,
    Button, TouchableHighlight, ScrollView,
    Image
} from "react-native"

import { RadioButton } from "react-native-paper"
import { Text } from "react-native-elements"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FuncLogin, Cadastrar } from "../functions/login"
import { getDados, session, SessionDadosPsi } from "../functions/getSessionPsi"

// import { SessionDadosPsi } from "../functions/getSessionPsi"

// importação tela cadastroPsi
import CadastroPsi from "./cadastroPsi/cadastro"

// importação da estilização Tela Login
import { estilo } from "../css/login"

export default ({ navigation }) => {

    const [emailValue, setEmailInput] = useState("")
    const [passwordValue, setPasswordInput] = useState("")
    const [checked, setChecked] = useState("paciente")

    function MainScreenPsicologo() {
        navigation.replace("TelaPerfilPsi", { email: emailValue })
    }

    function MainScreenPaciente() {
        navigation.replace("Card")
    }



    function login() {

        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            .then(() => {

                if (checked == "paciente") {
                    MainScreenPaciente()
                }

                if (checked == "psicologo") {
                    MainScreenPsicologo()
                    session()
                }

            }).catch((err) => {
                // console.log(err)
            })
    }

    // funções importadas passagem de parametros
    FuncLogin(emailValue, passwordValue)
    getDados(emailValue)

    return (

        // Elemento pai
        <SafeAreaView style={estilo.Main}>

            {/* Centralização ao elemento pai */}
            <View style={estilo.MainChildren}>

                {/* Logo  */}
                <View style={estilo.Logo}>
                    <Image style={{ width: "100%", height: "100%" }} source={require('../assets/logo.jpeg')} />
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
                                status={checked === "paciente" ? "checked" : "unchecked"}
                                onPress={() => setChecked('paciente')} />
                            <Text style={{ fontSize: 15 }}>Paciente   </Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: -20 }}>
                            <RadioButton
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                                status={checked === 'psicologo' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('psicologo')} value="Psicologo"
                            /><Text style={{ fontSize: 15 }}>Psicologo </Text>
                        </View>

                        <View style={estilo.InputsSession}>

                            <TextInput style={estilo.Inputs} onChangeText={(email) => setEmailInput(email + checked)}
                                placeholder=" E-mail" />
                            <Text></Text>

                            <TextInput style={estilo.Inputs} onChangeText={(password) => setPasswordInput(password)}
                                secureTextEntry={true} placeholder=" Senha" />

                        </View>

                        <TouchableHighlight underlayColor="#6A5ACD" onPress={() => login()}>
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