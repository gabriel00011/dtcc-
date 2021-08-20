import React, { useState } from "react"

import { View, SafeAreaView, TouchableHighlight, TextInput } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"

import { style } from "../../css/CssCadastroPac/CssCadastroPac1"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("first")
// 
    return (
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
                        onPress={() => setChecked('first')} />
                    <Text style={{ fontSize: 15 }}>Paciente               {/*fim*/}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <RadioButton
                        color="#6A5ACD"
                        uncheckedColor="#A9A9A9"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        onPress={() => navigation.navigate('ScreenPsi1')}
                        value="Psicologo"
                    /><Text style={{ fontSize: 15 }}>Psicologo            {/*fim*/}
                    </Text>
                </View>
            </View>

            <View>
                <TextInput style={style["Inputs"]} placeholder="E-mail" />
                <TextInput style={style["Inputs"]} placeholder="Senha" />
                <TextInput style={style["Inputs"]} placeholder="Confirme sua senha" />
            </View>


            {/* Botões de navegação de telas */}
            <View style={style["ButtonSession"]}>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("Login")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac2")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Proximo</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </SafeAreaView>
    )
}