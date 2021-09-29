import React, { useState, useContext } from "react"

import { View, SafeAreaView, TextInput, Button, TouchableHighlight, ScrollView, Picker } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"
import DatePicker from 'react-native-datepicker'

// importação de componente de estilização
import { style } from "../../css/CssCadastroPac/CssCadastroPac2"
import { FuncDadosPac2 } from "../../functions/CadastroPaciente"


export default ({ navigation }) => {

    const [checked, setChecked] = useState("masculino")
    const [nameValue, setNameInput] = useState("")
    const [middlenameValue, setMiddlenameInput] = useState("")
    const [cpfValue, setCpfInput] = useState("")
    const [rgValue, setRgInput] = useState("")
    const [telefoneValue, setTelefoneInput] = useState("")
    const [celValue, setCelInput] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [dateValue, setDateValue] = useState("")

    FuncDadosPac2(nameValue, middlenameValue, cpfValue, dateValue, rgValue, telefoneValue, celValue, selectedValue, checked)


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
                        <Text style={{ fontSize: 15 }}>Masculino  </Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === 'feminino' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('feminino')} value="Psicologo"
                        /><Text style={{ fontSize: 15 }}>Feminio      </Text>
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
                    onChangeText={(rg) => setRgInput(rg)} placeholder="RG" />

                <DatePicker
                    format="DD/MM/YYYY"
                    date={dateValue}
                    style={style["Inputs"]}
                    onDateChange={(valor) => setDateValue(valor)}
                    placeholder="Data de Nascimento"
                />

                <TextInput style={style["Inputs"]}
                    onChangeText={(tel) => setTelefoneInput(tel)} placeholder="Telefone" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cel) => setCelInput(cel)} placeholder="Celular" />

            </View>
            {/*style Botões de navegação de telas */}
            <View style={style.ButtonSession}>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac1")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac3")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Proximo</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </SafeAreaView>
    )
}