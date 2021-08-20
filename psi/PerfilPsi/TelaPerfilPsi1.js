import React from "react"

import { View, SafeAreaView, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

// importação de tela de estilização
import { style } from "../css/CssPerfilPsi/CssTelaPerfilPsi"

export default ({ navigation }) => {
    return (
        <SafeAreaView style={style["Main"]}>

            {/* Centralizar View */}
            <View style={style["SessionCenter"]}>

                <View style={style["SessionButtonAgenda"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("TelaAgendaPsi")}>
                        <View style={style["ButtonAgenda"]} >
                            <IconAntDesign name="book" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Agenda</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPsi")}>
                        <View style={style["ButtonConta"]}>
                            <IconMaterialCommunityIcons name="account-circle" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Conta</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* View de Nome e CRP */}
                <View style={style["SessionDados"]}>

                    <View style={style["Photo"]}>
                        <Text>Foto</Text>
                    </View>

                    <View style={style["NomeCrp"]}>
                        <Text style={{ fontWeight: "bold" }}>Nome do Psicologo</Text>
                        <Text style={{ color: "gray" }}>CRP 00/00000 </Text>
                    </View>

                </View>

                {/* View de direcionamento para consulta */}
                <View style={style["SessionDirectConsulta"]}>

                    <View style={style["DadosHoraConsulta"]}>
                        <ScrollView horizontal={true}>
                            <Text>Proxima consulta ás 00:00</Text>
                        </ScrollView>
                        <Text>Nome do Paciente</Text>
                    </View>

                    <View style={style["SessionButtonConsulta"]}>

                        <View style={style["StatusOnlinePresencial"]}>
                            <Text style={{ fontWeight: "bold", color: "gray" }}>Online</Text>
                        </View>

                        <TouchableHighlight>
                            <View style={style["ButtonConsulta"]}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>Ir para sessão</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                {/* View de grupo e especilidade */}
                <View style={style["SessionGroup"]}>

                    <Text style={{ fontWeight: "bold", color: "gray" }}>Público</Text>

                    <View style={style["OderButtonsGroup"]}>
                        <TouchableHighlight>
                            <View style={style["ButtonGroup1"]}>
                                <Text style={{ color: "white" }}>Grupo 1</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View style={style["ButtonGroup2"]}>
                                <Text style={{ color: "white" }}>Grupo 2</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    <TouchableHighlight>
                        <View style={style["ButtonGroupEspecilidade1"]}>
                            <Text style={{ color: "gray" }}>Especialidade 1</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                {/* Tabela de horário de consulta*/}
                <View style={style["SessionTable"]}>

                    {/* Botões online e presencial */}
                    <View style={style["SessionButtonsTable"]}>

                        <TouchableHighlight>
                            <View style={style["ButtonsOnline"]}>
                                <Text style={{ color: "#7B68EE" }}>Online</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View style={style["ButtonsPresencial"]}>
                                <Text style={{ color: "#7B68EE" }}>Presencial</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                </View>

                <View>
                    <Text style={{ fontWeight: "bold" }}>Apresentação: "Button/editar"</Text>
                </View>

            </View>

        </SafeAreaView >
    )
}