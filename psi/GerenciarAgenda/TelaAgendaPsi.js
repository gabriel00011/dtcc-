import React, { useEffect, useState } from "react"

import { View, SafeAreaView, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import axios from "axios"

// importação de tela de estilização
import { style } from "../css/CssSessao/CssSessaoPsi"

import { DadosCard } from "../functions/Card1"

export default ({ route, navigation }) => {

    const [dados, setDados] = useState([])
    try {

        const { idPsi } = route.params

        const id_psiS = JSON.stringify(idPsi)
        var id_psiP = JSON.parse(id_psiS)
        
    } catch (e) {
        console.log(e)
    }


    console.log(dados)

    try {

        useEffect(() => {
            axios.post(`http://192.168.15.223/showAgenda`, {
                idPsi: id_psiP
            })
                .then(resp => resp.data)
                .then(res => {
                    setDados(res)
                })

        }, [])

    } catch (e) {

    }

    return (
        <SafeAreaView style={style["Main"]}>

            {/* Centralizar View */}
            <ScrollView style={style["SessionCenter"]}>

                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("TelaPerfilPsi")}>
                        <View style={style["ButtonPerfil"]} >
                            <IconAntDesign name="profile" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Perfil</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPsi", { idPsi: id_psiP })}>
                        <View style={style["ButtonConta"]}>
                            <IconMaterialCommunityIcons name="account-circle" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Conta</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* View dados Psicologo */}
                <View style={style["SessionAddress"]}>

                    {dados.map((value) => (
                        <View style={style["DadosPsi"]}>

                            <View style={style["Dados"]}>
                                <Text style={{ fontWeight: "bold" }}>{value.pa_st_nome} {value.pa_st_sobrenome}</Text>
                                <Text style={{ color: "gray" }}>Dia: {value.age_hora_agendado} ás {value.age_dia_agendado}</Text>
                                <Text style={{ color: "gray" }}>Celular: {value.pa_st_celular}</Text>
                            </View>

                        </View>
                    ))}


                </View>

            </ScrollView>

        </SafeAreaView >
    )
}