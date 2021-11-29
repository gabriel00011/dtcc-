import React, { useState } from "react"

import { SafeAreaView, View, TextInput, TouchableHighlight, ScrollView, Picker } from "react-native"
import { Text, Icon } from "react-native-elements"
import DatePicker from 'react-native-datepicker'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IconAntDesign from "react-native-vector-icons/AntDesign"

import { FuncDadosPac1, FuncDadosPac2, FuncDadosPac3, UpdateDadosPaciente } from "../../functions/GerenciarCadastroPaciente"

// importação de componente de estilização
import { style } from "../../css/CssGerenciarCadastroPac/CssTelaGerenciarCadastroPac"

export default ({ navigation }) => {

    const [nameValue, setNameInput] = useState("")
    const [middlenameValue, setMiddlenameInput] = useState("")
    const [cpfValue, setCpfInput] = useState("")
    const [rgValue, setRgInput] = useState("")
    const [telefoneValue, setTelefoneInput] = useState("")
    const [celValue, setCelInput] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [dateValue, setDateValue] = useState("")

    const [cepValue, setCepInput] = useState("")
    const [ruaValue, setRuaInput] = useState("")
    const [NumeroValue, setNumeroInput] = useState("")
    const [complementosValue, setComplementosInput] = useState("")
    const [bairroValue, setBairroInput] = useState("")
    const [cidadeValue, setCidadeInput] = useState("")

    const [emailValue, setEmailInput] = useState("")
    const [passwordValue, setPasswordInput] = useState("")
    const [newPasswordValue, setNewPasswordInput] = useState("")
    const [passwordConfirmValue, setConfirmPasswordInput] = useState("")

    FuncDadosPac1(emailValue, passwordValue, passwordConfirmValue)
    FuncDadosPac2(nameValue, middlenameValue, cpfValue, dateValue, rgValue, telefoneValue, celValue, selectedValue)
    FuncDadosPac3(cepValue, ruaValue, NumeroValue, complementosValue, bairroValue, cidadeValue, selectedValue)

    return (

        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View Botão Incio */}
                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("Card")}>
                        <View style={style["ButtonBack"]}>
                            <Text style={{ marginRight: 10 }}>
                                <IconAntDesign name="leftcircleo" color="#7B68EE" size={20} />
                            </Text>

                            <Text style={{ color: "#7B68EE", fontSize: 15 }}>Ir para início</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* View de conta e foto */}
                <View style={style["SessionPhoto"]}>

                    <View>
                        <Text style={{ fontFamily: "fantasy" }} h4>Conta</Text>
                    </View>

                    <View style={style["Photo"]}>
                        <Text>Foto</Text>
                    </View>
                </View>

                {/* View de navegações de telas */}
                <View style={style["SessionNavegation"]}>
                    <ScrollView>

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
                            onChangeText={(cep) => setCepInput(cep)} placeholder="CEP" />

                        <TextInput style={style["Inputs"]}
                            onChangeText={(rua) => setRuaInput(rua)} placeholder="Rua" />

                        {/* View duplo elementos */}
                        <View style={style["SessionDubleInputs"]}>

                            <TextInput
                                style={style["FragmentInputsNumber"]}
                                onChangeText={(numero) => setNumeroInput(numero)}
                                placeholder=" Nº" />

                            <TextInput
                                style={style["FragmentInputsComp"]}
                                onChangeText={(complementos) => setComplementosInput(complementos)}
                                placeholder=" Complemento" />

                        </View>

                        <TextInput style={style["Inputs"]}
                            onChangeText={(bairro) => setBairroInput(bairro)} placeholder="Bairro" />

                        <TextInput style={style["Inputs"]}
                            onChangeText={(cidade) => setCidadeInput(cidade)} placeholder="Cidade" />


                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 170, borderWidth: 1, borderColor: "gray" }}
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

                        <View style={style["SessionDubleInputs"]}>
                            <TextInput
                                style={style["FragmentInputsComp"]}
                                onChangeText={(tel) => setTelefoneInput(tel)}
                                placeholder=" Telefone" />

                            <TextInput
                                style={style["FragmentInputsNumber"]}
                                onChangeText={(cel) => setCelInput(cel)}
                                placeholder=" celular" />
                        </View>

                        <TextInput
                            style={style["Inputs"]}
                            onChangeText={(email) => setEmailInput(email)}
                            placeholder=" Email" />

                        <TextInput
                            style={style["Inputs"]}
                            onChangeText={(password) => setPasswordInput(password)}
                            placeholder=" Senha Atual" />

                        <TextInput
                            style={style["Inputs"]}
                            onChangeText={(newsenha) => setNewPasswordInput(newsenha)}
                            placeholder=" Nova Senha" />

                        <TextInput
                            style={style["Inputs"]}
                            onChangeText={(password) => setConfirmPasswordInput(password)}
                            placeholder=" Confirme a nova senha" />

                        {/*View botões footer*/}
                        <View style={style["SessionButtonFooter"]}>

                            <View>
                                <TouchableHighlight onPress={() => UpdateDadosPaciente()}>
                                    <View style={style["ButtonSave"]}>
                                        <Text style={{ color: "white" }} h4>Salvar Alterações</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <View style={style["SessionButtonFooterDuble"]}>
                                <TouchableHighlight>
                                    <View style={style["ButtonExit"]}>
                                        <Text style={{ color: "white" }} h4>Sair</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight>
                                    <View style={style["ButtonDelete"]}>
                                        <Text style={{ color: "white" }} h4>Excluir conta</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}