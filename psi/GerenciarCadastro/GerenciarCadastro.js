import React from "react"

import { SafeAreaView, View, TextInput, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


// importação de componente de estilização
import { style } from "../css/CssGerenciarCadastroPsi/TelaGerenciarCadastroPsi1"

export default ({ navigation }) => {

    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* Botões com icons de psicologo */}
                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight>
                        <View style={style["ButtonPerfil"]}>
                            <Text style={{ color: "#7B68EE", fontFamily: "monospace" }}>Perfil</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View style={style["ButtonAgenda"]}>
                            <Text style={{ color: "#7B68EE", fontFamily: "monospace" }}>Agenda</Text>
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
                        <TextInput style={style["Inputs"]} placeholder="nome" />
                        <TextInput style={style["Inputs"]} placeholder="sobrenome" />
                        <TextInput style={style["Inputs"]} placeholder="CRP" />
                        <TextInput style={style["Inputs"]} placeholder="CPF" />
                        <TextInput style={style["Inputs"]} placeholder="CEP" />
                        <TextInput style={style["Inputs"]} placeholder="Rua" />

                        {/* View duplo elementos */}
                        <View style={style["SessionDubleInputs"]}>
                            <TextInput style={style["FragmentInputsNumber"]} placeholder="Nº" />
                            <TextInput style={style["FragmentInputsComp"]} placeholder="Complemento" />
                        </View>

                        <TextInput style={style["Inputs"]} placeholder="Bairro" />
                        <TextInput style={style["Inputs"]} placeholder="Cidade" />
                        <TextInput style={style["Inputs"]} placeholder="Enum" />

                        <View style={style["SessionDubleInputs"]}>
                            <TextInput style={style["FragmentInputsComp"]} placeholder="Telefone" />
                            <TextInput style={style["FragmentInputsNumber"]} placeholder="celular" />
                        </View>

                        <TextInput style={style["Inputs"]} placeholder="Email" />
                        <TextInput style={style["Inputs"]} placeholder="Senha Atual" />
                        <TextInput style={style["Inputs"]} placeholder="Nova Senha" />
                        <TextInput style={style["Inputs"]} placeholder="Confirme a nova senha" />

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
            // <View>

            //     <TouchableHighlight >
            //         <View>
            //             <Text>Voltar</Text>
            //         </View>
            //     </TouchableHighlight>

            //     <TouchableHighlight >
            //         <View>
            //             <Text>Proximo</Text>
            //         </View>
            //     </TouchableHighlight>

            // </View>