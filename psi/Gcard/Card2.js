import React, { useEffect, useState } from "react"

import { SafeAreaView, View, TouchableHighlight, ScrollV } from "react-native"
import { Text } from "react-native-elements"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import axios from "axios"

// importação de arquivo de estilização
import { style } from "../css/CssCard/CssCard2"

export default ({ route, navigation }) => {

    const { email, idpac } = route.params

    const id_pacS = JSON.stringify(idpac)
    const id_pacP = JSON.parse(id_pacS)

    const stringify = JSON.stringify(email)
    const parse = JSON.parse(stringify)

    const [listDadosPsi, setListDados] = useState([])
    const [segData, setDataSeg] = useState([])
    const [terData, setDataTer] = useState([])
    const [quaData, setDataQua] = useState([])
    const [quiData, setDataQui] = useState([])
    const [sexData, setDataSex] = useState([])

    const [buttonHours, setButtonHours] = useState("")
    const [dayHours, setDayHours] = useState("")

    console.log(listDadosPsi)

    useEffect(() => {

        try {

            axios.get("http://192.168.15.223/getDadosPsicologo/" + parse)
                .then(DadosPsicologo => DadosPsicologo.data)
                .then(renderDados => {
                    setListDados(renderDados.resultado)
                    setDataSeg(renderDados.resultSeg)
                    setDataTer(renderDados.resultTer)
                    setDataQua(renderDados.resultQua)
                    setDataQui(renderDados.resultQui)
                    setDataSex(renderDados.resultSex)
                })

        } catch (e) {

            console.log(e)
        }

    }, [])

    try {
        var Id_psicologo = listDadosPsi[0].psi_in_codigo
    } catch (e) {

        console.log(e)
    }

    console.log(Id_psicologo)

    const agendamento = (buttonHours, dayHours, Id_psicologo, id_pacP) => {
        axios.post("http://192.168.15.223:80/agendaPsi", {
            hours: buttonHours,
            day: dayHours,
            idPsi: Id_psicologo,
            idPac: id_pacP
        })
    }


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
                        {listDadosPsi.map((value) => (
                            <View style={{ marginLeft: 10 }}>
                                <Text>{value.psi_st_nome} {value.psi_st_sobrenome}</Text>
                                <Text>{value.psi_st_crp}</Text>
                            </View>
                        ))}

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

                <View style={style["OrdersDay"]}>

                    <View style={{ alignItems: "center" }}>
                        <Text>seg</Text>
                        <View style={style["orderHous"]}>
                            <View style={{ height: 10 }}></View>
                            {segData.map((value) => (

                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    setButtonHours(value.hr_segunda)
                                    setDayHours("Segunda-feira")
                                }}>
                                    <View style={style["styleHour"]}>
                                        <Text key={value.id_segunda}> {value.hr_segunda} </Text>
                                    </View>
                                </TouchableHighlight>

                            ))}
                        </View>
                    </View>


                    <View style={{ alignItems: "center" }}>
                        <Text>ter</Text>
                        <View style={style["orderHous"]} >
                            <View style={{ height: 10 }}></View>
                            {terData.map((value) => (
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    setButtonHours(value.hr_terca)
                                    setDayHours("Terça-feira")
                                }}
                                >
                                    <View style={style["styleHour"]}>
                                        <Text key={value.id_terca}> {value.hr_terca} </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </View>
                    </View>


                    <View style={{ alignItems: "center" }}>
                        <Text>qua</Text>
                        <View style={style["orderHous"]}>
                            <View style={{ height: 10 }}></View>
                            {quaData.map((value) => (
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    setButtonHours(value.hr_quarta)
                                    setDayHours("Quarta-feira")
                                }}>
                                    <View style={style["styleHour"]}>
                                        <Text key={value.hr_quarta}> {value.hr_quarta} </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Text>qui</Text>
                        <View style={style["orderHous"]}>
                            <View style={{ height: 10 }}></View>
                            {quiData.map((value) => (
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    setButtonHours(value.hr_quinta)
                                    setDayHours("Quinta-feira")
                                }}>
                                    <View style={style["styleHour"]}>
                                        <Text key={value.hr_quinta}> {value.hr_quinta} </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Text>sex</Text>
                        <View style={style["orderHous"]}>
                            <View style={{ height: 10 }}></View>
                            {sexData.map((value) => (
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    setButtonHours(value.hr_sexta)
                                    setDayHours("Sexta-feira")
                                }}>
                                    <View style={style["styleHour"]}>
                                        <Text key={value.hr_sexta}> {value.hr_sexta} </Text>
                                    </View>
                                </TouchableHighlight>
                            ))}
                        </View>

                    </View>

                </View>

                <View style={style["SessionCenterButtonAgendar"]}>

                    <View style={style["orderWekeendHours"]}>
                        <Text> Dia: {dayHours}</Text>
                        <Text> hora: {buttonHours}</Text>
                    </View>

                    <TouchableHighlight underlayColor="none" onPress={() => { agendamento(buttonHours, dayHours, Id_psicologo, id_pacP) }}>
                        <View style={style["ButtonsAplicar"]}>
                            <Text style={{ color: "white", fontSize: RFPercentage(3) }}>AGENDAR</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>

        </SafeAreaView>
    )
}