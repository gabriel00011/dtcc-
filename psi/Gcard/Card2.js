import React from "react"

import { SafeAreaView, View, TouchableHighlight } from "react-native"
import { Text } from "react-native-elements"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import IconAntDesign from "react-native-vector-icons/AntDesign"

// importação de arquivo de estilização
import { style } from "../css/CssCard/CssCard2"
export default ({ navigation }) => {
    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View de search e foto */}
                <View style={style["SessionPhotoeSearch"]}>

                    <TouchableHighlight>
                        <View style={{ marginRight: 25 }}>
                            <IconAntDesign name="search1" size={30} />
                        </View>
                    </TouchableHighlight>

                    <View style={style["Photo"]}>
                        <Text>Foto</Text>
                    </View>

                </View>

                {/* View de dados Psicologo */}
                <View style={style["SessionDadosPsi"]}>

                    <View style={style["Photo"]}>
                        <Text>Foto</Text>
                    </View>

                    <View style={{ marginLeft: 10 }}>
                        <Text>Nome do Psicologo</Text>
                        <Text>CRP 00/0000</Text>
                        <Text>0,0 km</Text>
                    </View>

                </View>

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

                <View style={style["SessionButtonsTipo"]}>

                    <TouchableHighlight style={style["ButtonsOnline"]}>
                        <View>
                            <Text style={{ color: "#6A5ACD" }}>Online</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={style["ButtonsPresencial"]}>
                        <View>
                            <Text style={{ color: "#6A5ACD" }}>Presencial</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <View style={style["SessionHorasAgendamento"]}>
                    <Text>horas</Text>
                </View>

                <View style={style["SessionCenterButtonAgendar"]}>

                    <TouchableHighlight>
                        <View style={style["ButtonsAplicar"]}>
                            <Text style={{ color: "white", fontSize: RFPercentage(3) }}>AGENDAR</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>

        </SafeAreaView>
    )
}