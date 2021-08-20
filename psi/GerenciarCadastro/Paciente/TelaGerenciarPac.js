import React from "react"

import { SafeAreaView, View, TextInput, TouchableHighlight, ScrollView } from "react-native"
import { Text, Icon } from "react-native-elements"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IconAntDesign from "react-native-vector-icons/AntDesign"


// importação de componente de estilização
import { style } from "../../css/CssGerenciarCadastroPac/CssTelaGerenciarCadastroPac"

export default ({ navigation }) => {

    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View Botão Incio */}
                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight underlayColor="none">
                        <View style={style["ButtonBack"]}>
                            <Text style={{ marginRight: 10 }}>
                                <IconAntDesign name="leftcircleo" color="#7B68EE" size={20}  />                            
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
                        <TextInput style={style["Inputs"]} placeholder=" Nome" />
                        <TextInput style={style["Inputs"]} placeholder=" Sobrenome" />
                        <TextInput style={style["Inputs"]} placeholder=" CPF" />
                        <TextInput style={style["Inputs"]} placeholder=" RG" />
                        <TextInput style={style["Inputs"]} placeholder=" Data de nascimento" />
                        <TextInput style={style["Inputs"]} placeholder=" CEP" />
                        <TextInput style={style["Inputs"]} placeholder=" Rua" />

                        {/* View duplo elementos */}
                        <View style={style["SessionDubleInputs"]}>
                            <TextInput style={style["FragmentInputsNumber"]} placeholder=" Nº" />
                            <TextInput style={style["FragmentInputsComp"]} placeholder=" Complemento" />
                        </View>

                        <TextInput style={style["Inputs"]} placeholder=" Bairro" />
                        <TextInput style={style["Inputs"]} placeholder=" Cidade" />
                        <TextInput style={style["Inputs"]} placeholder=" Enum" />

                        <View style={style["SessionDubleInputs"]}>
                            <TextInput style={style["FragmentInputsComp"]} placeholder=" Telefone" />
                            <TextInput style={style["FragmentInputsNumber"]} placeholder=" celular" />
                        </View>

                        <TextInput style={style["Inputs"]} placeholder=" Email" />
                        <TextInput style={style["Inputs"]} placeholder=" Senha Atual" />
                        <TextInput style={style["Inputs"]} placeholder=" Nova Senha" />
                        <TextInput style={style["Inputs"]} placeholder=" Confirme a nova senha" />

                        {/*View botões footer*/}
                        <View style={style["SessionButtonFooter"]}>

                            <View>
                                <TouchableHighlight>
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