import React, { useState } from "react"

import { View, SafeAreaView, TextInput, Button, TouchableHighlight, Picker } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"
import DatePicker from "react-native-datepicker"

// importação de componente de estilização
import { style } from "../../css/CssCadastroPsi/CssTelaCadastro2"

import { FuncDadosPsi2 } from "../../functions/CadastroPsicologo"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("masculino")
    const [nameValue, setNameInput] = useState("")
    const [middlenameValue, setMiddlenameInput] = useState("")
    const [crpValue, setCrpInput] = useState("")
    const [cpfValue, setCpfInput] = useState("")
    const [telefoneValue, setTelefoneInput] = useState("")
    const [celValue, setCelInput] = useState("")
    const [selectedValue, setSelectedValue] = useState("")


    FuncDadosPsi2(nameValue, middlenameValue, cpfValue, crpValue, telefoneValue, celValue, selectedValue, checked)

    return (
        // View Elemento Filho/Pai
        <SafeAreaView style={style.Main}>

            {/* Seleções de genero */}
            <View style={style["GeneroSession"]}>

                <View>

                    <Text style={{ color: "#6A5ACD", marginBottom: 10 }}>sexo</Text>

                    <View value="Paciente" style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === "masculino" ? "checked" : "unchecked"}
                            onPress={() => setChecked('masculino')} />
                        <Text style={{ fontSize: 15 }}>Masculino</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === 'feminino' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('feminino')} value="Psicologo"
                        /><Text style={{ fontSize: 15 }}>Feminio    </Text>
                    </View>

                </View>

                <View>
                    <Text style={{ color: "#6A5ACD", marginBottom: 10 }}>Genêro</Text>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 170 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Não selecionado" />
                        <Picker.Item label="Transgênero" value="Transgenero" />
                        <Picker.Item label="Não binário" value="Nao binario" />
                        <Picker.Item label="Cisgênero" value="Cisgenero" />
                    </Picker>


                </View>

            </View>

            {/* Area de campo de inserção de texto */}
            <View style={style["InputSession"]}>
               
                <TextInput style={style["Inputs"]}
                    onChangeText={(name) => setNameInput(name)} placeholder="Nome" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(middlename) => setMiddlenameInput(middlename)} placeholder="Sobrenome" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cpf) => setCpfInput(cpf)} placeholder="CPF" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(crp) => setCrpInput(crp)} placeholder="CRP" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(tel) => setTelefoneInput(tel)} placeholder="Telefone" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cel) => setCelInput(cel)} placeholder="Celular" />

            </View>

            {/* Botões de navegação de telas */}
            <View style={style.ButtonSession}>
                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPsi1")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPsi3")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Proximo</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}