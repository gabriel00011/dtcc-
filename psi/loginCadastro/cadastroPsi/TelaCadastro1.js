import React, { useState } from "react"

import { View, SafeAreaView, TouchableHighlight, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"

import { style } from "../../css/CssCadastroPsi/CssTelaCadastro1"

import { FuncDadosPsi1, ComfirmValuePassword } from "../../functions/CadastroPsicologo"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("second")
    const [emailValue, setEmailInput] = useState("")
    const [passwordValue, setPasswordInput] = useState("")
    const [passwordConfirmValue, setConfirmPasswordInput] = useState("")

    FuncDadosPsi1(emailValue, passwordValue, passwordConfirmValue)

    return (
        // view principal
        <SafeAreaView style={style["Main"]}>
            <View style={{ marginLeft: 40 }}>
                <Text style={{ color: "#6A5ACD" }} h4>Você é...</Text>
            </View>

            {/* View RadioButton */}

            <View style={style["SessionRadio"]}>

                <View value="Paciente" style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <RadioButton
                        color="#6A5ACD"
                        uncheckedColor="#A9A9A9"
                        status={checked === "first" ? "checked" : "unchecked"}
                        onPress={() => setChecked('first')}
                        onPress={() => navigation.navigate("ScreenPac1")}
                    />
                    <Text style={{ fontSize: 15 }}>Paciente               {/*fim*/}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <RadioButton
                        color="#6A5ACD"
                        uncheckedColor="#A9A9A9"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        value="Psicologo"
                    /><Text style={{ fontSize: 15 }}>Psicologo            {/*fim*/}
                    </Text>
                </View>

            </View>


            <View >
                <ScrollView>

                    <TextInput style={style["Inputs"]}
                        onChangeText={(email) => setEmailInput(email)} placeholder="E-mail" />

                    <TextInput style={style["Inputs"]}
                        onChangeText={(password) => setPasswordInput(password)} secureTextEntry={true} placeholder="Senha" />

                    <TextInput style={style["Inputs"]}
                        onChangeText={(password) => setConfirmPasswordInput(password)} secureTextEntry={true} placeholder="Confirme sua senha" />

                    <Text>{ComfirmValuePassword()}</Text>

                </ScrollView>
            </View>

            {/* Botões de navegação de telas */}
            <View style={style["ButtonSession"]}>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("Login")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPsi2")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Proximo</Text>
                    </View>
                </TouchableHighlight>

            </View>

        </SafeAreaView>

    )
}