import React from "react"

import { SafeAreaView, View, TouchableHighlight, ScrollView, TextInput } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconFeather from "react-native-vector-icons/Feather"

// importação de tela de estilização
import { style } from "../css/CssPerfilPac/CssTelaPerfilPaciente1"

export default ({ navigation }) => {
    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["CenterSession"]}>

                {/* view de icons sair e pesquisar */}
                <View style={style["SessionIcon"]}>
                    <TouchableHighlight>
                        <View>
                            <Text><IconAntDesign name="search1" size={30} color="#696969" /></Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View style={{ marginLeft: 15 }}>
                            <Text><IconFeather name="log-out" size={30} color="#696969" /></Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <ScrollView contentContainerStyle={{ width: "100%" }} horizontal={false}>

                    {/* View de endereço Psicologo*/}
                    <View style={style["SessionAddress"]}>
                        <View style={{ width: "100%" }}>
                            <Text>Nome do psicologo</Text>
                            <Text>CRP 00/00000</Text>
                            <Text>0,0km</Text>
                        </View>

                        <View style={style["Photo"]}>
                            <Text>Foto</Text>
                        </View>

                        <View>
                            <View>
                                <Text>Endereço</Text>
                            </View>
                            <Text>Cep: 00000-000</Text>
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

                    <View style={style["SessionApresentacao"]}>
                        <Text style={{ fontWeight: "bold" }}>Apresentação:</Text>
                        <Text>{/*separação de elementos deixar vazia*/}</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </View>

                    <View style={style["SessionComents"]}>

                        {/* Futuramente será uma scroolView para divulgação */}

                        <Text style={{ fontWeight: "bold" }}>Comentários:</Text>
                        <Text>{/*separação de elementos deixar vazia*/}</Text>
                        <Text style={{ fontWeight: "bold" }}>Nome do paciente</Text>
                        <Text>{/*separação de elementos deixar vazia*/}</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                    </View>


                    {/* table de horarios do psicologo */}
                    <View style={style["SessionTable"]}>
                        <View style={style["SessionButtonsTable"]}>

                            <TouchableHighlight>
                                <View style={style["ButtonsOnline"]}>
                                    <Text style={{ color: "#6A5ACD", fontWeight: "bold" }}>Online</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight>
                                <View style={style["ButtonsPresencial"]}>
                                    <Text style={{ color: "#6A5ACD", fontWeight: "bold" }}>Presencial</Text>
                                </View>
                            </TouchableHighlight>

                        </View>

                        <View></View>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}