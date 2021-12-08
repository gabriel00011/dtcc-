import React, { useEffect, useState } from "react"

import { SafeAreaView, View, TouchableHighlight, CheckBox, TextInput } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconFeather from "react-native-vector-icons/Feather"
import { api } from "../source_config/axios"

// importação de arquivo para estilização
import { style } from "../css/CssCard/CssCard"

// funcionalidades
import { sendSearch, FuncDadosCard } from "../functions/Card1"
import { DadosLogin } from "../functions/login"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("first")
    const [isSelected, setSelection] = useState(false)
    const [dadosPaciente, setDadosPaciente] = useState([])

    const [infantil, setInfantil] = useState(false)
    const [idoso, setIdoso] = useState(false)
    const [casais, setCasais] = useState(false)
    const [todos, setTodos] = useState(false)
    const [lgbtq, setLgbtq] = useState(false)
    const [pcd, setPcd] = useState(false)

    const [ansiedade, setAnsiedade] = useState(false)
    const [toc, setToc] = useState(false)
    const [burnout, setBurnout] = useState(false)
    const [tag, setTag] = useState(false)
    const [casamento, setCasamento] = useState(false)
    const [alcoolismo, setalcoolismo] = useState(false)

    useEffect(() => {
        try {
            api.get("/dadosPaciente/" + DadosLogin.email)
                .then(resp => resp.data)
                .then(resp => {
                    setDadosPaciente(resp)
                })
        } catch (err) {
            console.log(err)
        }

    }, [])


    console.log(dadosPaciente)

    try {
        var id_paciente = dadosPaciente[0].pa_in_codigo
    } catch (e) {

    }

    const setAll = () => {
        setIdoso(true)
    }

    // valor do checkbox 
    let IdosoValue = ""
    let casaisValue = ""
    let infantilValue = ""
    let todosValues = ""
    let lgbtqValues = ""
    let pcdValues = ""

    if (infantil == true) {
        infantilValue = "E"
    }

    if (idoso == true) {
        IdosoValue = "A"
    }

    if (casais == true) {
        casaisValue = "B"
    }

    if (lgbtq == true) {
        lgbtqValues = "C"
    }

    if (pcd == true) {
        pcdValues = "D"
    }

    // Especialistas checbox
    let ansiedadeValue = ""
    let tocValues = ""
    let burnoutValues = ""
    let tagValues = ""
    let casamentoValues = ""
    let alcoolismoValues = ""


    if (ansiedade == true) {
        ansiedadeValue = "F"
    }

    if (toc == true) {
        tocValues = "G"
    }

    if (burnout == true) {
        burnoutValues = "H"
    }

    if (tag == true) {
        tagValues = "I"
    }

    if (casamento == true) {
        casamentoValues = "J"
    }

    if (alcoolismo == true) {
        alcoolismoValues = "k"
    }


    // valor do RadioButton 

    if (todos == true) {
        todosValues = "todos"
        infantilValue = "E"
        IdosoValue = "A"
        casaisValue = "B"
        lgbtqValues = "C"
        pcdValues = "D"
        ansiedadeValue = "F"
        tocValues = "G"
        burnoutValues = "H"
        tagValues = "I"
        casamentoValues = "J"
        alcoolismoValues = "K"
    }


    FuncDadosCard(infantilValue, IdosoValue, casaisValue, todosValues, lgbtqValues, pcdValues, ansiedadeValue, tocValues, burnoutValues, tagValues, casamentoValues, alcoolismoValues)

    // console.log(infantilValue, IdosoValue, casaisValue, todosValues, lgbtqValues, pcdValues, ansiedadeValue, tocValues, burnoutValues, tagValues, casamentoValues, alcoolismoValues)
    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                <View style={style["SeesionIcon"]}>

                    <View style={style["SessionIconView"]}>

                        <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPac")}>
                            <View style={style["ButtonConta"]}>
                                <IconMaterialCommunityIcons name="account-circle" size={25} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE" }}>Conta</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("sessionPac", { idpac: id_paciente })}>
                            <View style={style["ButtonConta"]}>
                                <IconAntDesign name="profile" size={25} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE" }}>Consultas</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="none" onPress={() => { navigation.replace("Login") }}>
                            <View style={{ marginLeft: 90 }}>
                                <Text><IconFeather name="log-out" size={30} color="#696969" /></Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                    <View >

                        {dadosPaciente.map((value) => (
                            <View style={style["PhotoName"]}>
                                <View style={style["Photo"]}>
                                    <Text key={value.pa_in_codigo} style={{ fontSize: 25, color: "white" }}>{value.pa_st_nome.charAt().toUpperCase()}</Text>
                                </View>
                                <Text key={value.pa_in_codigo} style={{ fontWeight: "bold" }}>{value.pa_st_nome} {value.pa_st_sobrenome}</Text>
                            </View>
                        ))}


                    </View>

                </View>

                {/* View de Botoões */}
                <View style={style["SessionModalidade"]}>

                    <Text style={{ fontWeight: "bold" }}>Modalidade</Text>

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

                </View>

                <View style={style["SessionSelects"]}>

                    <View style={style["SessionOrgSelects"]}>

                        {/* Check Box */}
                        <View style={style["Checkbox"]}>

                            <Text style={{ fontWeight: "bold" }}>Público</Text>

                            <View style={style["AlignChecbox"]}>

                                <TouchableHighlight onPress={() => setAll()}>
                                    <View style={style["AlignSelects"]}>
                                        <CheckBox
                                            onPress={() => setAll()}
                                            value={todos}
                                            onValueChange={setTodos}
                                            color="#6A5ACD"
                                            uncheckedColor="#A9A9A9"
                                        />
                                        <Text>Todos</Text>
                                    </View>
                                </TouchableHighlight>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={idoso}
                                        onValueChange={setIdoso}
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                    /><Text>Idoso</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={casais}
                                        onValueChange={setCasais}
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                    /><Text>Casais</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={lgbtq}
                                        onValueChange={setLgbtq}
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                    /><Text>LGBTQIA+</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={pcd}
                                        onValueChange={setPcd}
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                    /><Text>PCD</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={infantil}
                                        onValueChange={setInfantil}
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                    /><Text>Infantil</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: "8%" }}>
                    <Text style={{ textAlign: "left" }}>Especialistas em...</Text>
                </View>

                {/* View de Especialista */}
                <View style={style["SessionEspecialidade"]}>

                    <View style={style["CheckboxEspecialidade1"]}>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={ansiedade}
                                onValueChange={setAnsiedade}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>Ansiedade</Text>
                        </View>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={toc}
                                onValueChange={setToc}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>TOC</Text>
                        </View>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={burnout}
                                onValueChange={setBurnout}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>Burnout</Text>
                        </View>

                    </View>

                    <View style={style["CheckboxEspecialidade2"]}>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={tag}
                                onValueChange={setTag}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>TAG</Text>
                        </View>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={casamento}
                                onValueChange={setCasamento}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>Casamento</Text>
                        </View>

                        <View style={style["AlignSelects"]}>
                            <CheckBox
                                value={alcoolismo}
                                onValueChange={setalcoolismo}
                                color="#6A5ACD"
                                uncheckedColor="#A9A9A9"
                            />
                            <Text>Alcoolismo</Text>
                        </View>

                    </View>

                </View>

                <View style={style["SessionCenterButtonAplicar"]}>

                    <TouchableHighlight onPress={(() =>
                        navigation.navigate("sessionPSi", { idpac: id_paciente }))}>
                        <View style={style["ButtonsAplicar"]}>
                            <Text style={{ color: "white", fontSize: RFPercentage(3) }}>APLICAR</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>


        </SafeAreaView >
    )
}

