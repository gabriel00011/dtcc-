import React, { useEffect, useState } from "react"

import { View, SafeAreaView, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { api } from "../source_config/axios"

// importação de tela de estilização
import { style } from "../css/CssSessao/CssSessaoPsi"

import { DadosCard } from "../functions/Card1"

export default ({ route, navigation }) => {

    const [dados, setDados] = useState([])

    try {

        const { idpac } = route.params

        const id_pacS = JSON.stringify(idpac)
        var id_pacP = JSON.parse(id_pacS)

    } catch (e) {

    }


    // console.log(dados)

    try {

        useEffect(() => {
            api.post(`/searchPsicologo`, {

                infantil: DadosCard.infantil,
                idoso: DadosCard.idoso,
                casais: DadosCard.casais,
                todos: DadosCard.todos,
                lgbtq: DadosCard.lgbtq,
                pcd: DadosCard.pcd,

                ansiedade: DadosCard.ansiedade,
                toc: DadosCard.toc,
                burnout: DadosCard.burnout,
                tag: DadosCard.tag,
                casamento: DadosCard.casamento,
                alcoolismo: DadosCard.alcoolismo

            })
                .then(resp => resp.data)
                .then(res => {
                    setDados(res)
                })

        }, [])

    } catch (e) {
        console.log(e)
    }

    console.log(DadosCard.ansiedade, DadosCard.idoso)

    return (
        <SafeAreaView style={style["Main"]}>

            {/* Centralizar View */}
            <ScrollView style={style["SessionCenter"]}>

                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPac")}>
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
                            <TouchableHighlight underlayColor="none" onPress={() => { navigation.navigate("Card2", { email: value.psi_st_email, idpac: id_pacP }) }}>
                                <View style={style["Dados"]}>
                                    <Text style={{ fontWeight: "bold" }}>{value.psi_st_nome}</Text>
                                    <Text style={{ color: "gray" }}>{value.psi_st_crp}</Text>
                                    <Text style={{ color: "gray" }}>{value.end_st_rua}, {value.end_st_numero}, {value.end_st_cidade}, {value.end_st_cep}, {value.end_st_uf}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    ))}


                </View>

            </ScrollView>

        </SafeAreaView >
    )
}