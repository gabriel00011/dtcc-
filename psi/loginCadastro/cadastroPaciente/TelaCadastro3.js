import React, { useState } from "react"

import { View, SafeAreaView, TouchableHighlight, TextInput, Picker } from "react-native"
import { Text } from "react-native-elements"
const { firebase } = require("../../functions/CadastroPsicologo")

// importação componente de estilização
import { style } from "../../css/CssCadastroPsi/CssTelaCadastro3"


import { FuncDadosPac3, Cadastrar, DadosPaciente } from "../../functions/CadastroPaciente"
import cadastro from "../cadastroPsi/cadastro"

export default ({ navigation }) => {

    function nav() {
        navigation.navigate("Login")
    }


    const [cepValue, setCepInput] = useState("")
    const [ruaValue, setRuaInput] = useState("")
    const [NumeroValue, setNumeroInput] = useState("")
    const [complementosValue, setComplementosInput] = useState("")
    const [bairroValue, setBairroInput] = useState("")
    const [cidadeValue, setCidadeInput] = useState("")
    const [selectedValue, setSelectedValue] = useState("")


    FuncDadosPac3(cepValue, ruaValue, NumeroValue, complementosValue, bairroValue, cidadeValue, selectedValue)

// função de cadastro email e senha para login

    function send() {

        firebase.auth().createUserWithEmailAndPassword(DadosPaciente.email, DadosPaciente.pass)
            .then(() => {
                Cadastrar()
                nav()
                // console.warn("sucesso")
            }).catch((err) => {
                console.warn(err)
            })
    }

    return (
        <SafeAreaView style={style.Main}>

            {/* Area de campo de inserção de texto */}
            <View style={style["InputSession"]}>

                <TextInput style={style["Inputs"]}
                    onChangeText={(cep) => setCepInput(cep)} placeholder="CEP" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(rua) => setRuaInput(rua)} placeholder="Rua" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(numero) => setNumeroInput(numero)} placeholder="Nº" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(complementos) => setComplementosInput(complementos)} placeholder="Complementos" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(bairro) => setBairroInput(bairro)} placeholder="Bairro" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cidade) => setCidadeInput(cidade)} placeholder="Cidade" />

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 170 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Não selecionado" />
                    <Picker.Item label="Acre" value="AC" />
                    <Picker.Item label="Alagoas" value="AL" />
                    <Picker.Item label="Amapá" value="AP" />

                    <Picker.Item label="Amazonas" value="AM" />
                    <Picker.Item label="Bahia" value="BA" />
                    <Picker.Item label="Ceará" value="CE" />
                    <Picker.Item label="Espírito Santo" value="ES" />


                    <Picker.Item label="Goiás" value="GO" />
                    <Picker.Item label="Maranhão" value="MA" />
                    <Picker.Item label="Mato Grosso" value="MT" />

                    <Picker.Item label="Mato Grosso do Sul" value="MS" />
                    <Picker.Item label="Minas Gerais" value="MG" />
                    <Picker.Item label="Pará" value="PA" />

                    <Picker.Item label="Paraíba" value="PB" />
                    <Picker.Item label="Paraná" value="PR" />
                    <Picker.Item label="Pernambuco" value="PE" />

                    <Picker.Item label="Piauí" value="PI" />
                    <Picker.Item label="Rio de Janeiro" value="RJ" />
                    <Picker.Item label="Rio Grande do Norte" value="RN" />

                    <Picker.Item label="Rio Grande do Sul" value="RS" />
                    <Picker.Item label="Rondônia" value="RO" />
                    <Picker.Item label="Roraima" value="RR" />

                    <Picker.Item label="Santa Catarina" value="SC" />
                    <Picker.Item label="São Paulo" value="SP" />
                    <Picker.Item label="Sergipe" value="SE" />

                    <Picker.Item label="Tocantins" value="TO" />
                    <Picker.Item label="Distrito Federal" value="DF" />
                </Picker>

            </View>

            {/* Botões de navegação de telas */}
            <View style={style["ButtonSession"]}>
                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac2")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => send()}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Finalizar</Text>
                    </View>
                </TouchableHighlight>
                
            </View>
        </SafeAreaView>
    )
}