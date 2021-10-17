import React, { useEffect, useState } from "react"

import { SafeAreaView, View, TouchableHighlight, CheckBox } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import axios from "axios"

// importação de arquivo para estilização
import { style } from "../css/CssCard/CssCard"

// funcionalidades
import { sendSearch, FuncDadosCard } from "../functions/Card1"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("first")
    const [isSelected, setSelection] = useState(false)

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
        infantilValue = "infantil"
    }

    if (idoso == true) {
        IdosoValue = "idoso"
    }

    if (casais == true) {
        casaisValue = "casais"
    }


    if (lgbtq == true) {
        lgbtqValues = "lgbtq"
    }

    if (pcd == true) {
        pcdValues = "pcd"
    }

    // Especialistas checbox
    let ansiedadeValue = ""
    let tocValues = ""
    let burnoutValues = ""
    let tagValues = ""
    let casamentoValues = ""
    let alcoolismoValues = ""


    if (ansiedade == true) {
        ansiedadeValue = "ansiedade"
    }

    if (toc == true) {
        tocValues = "toc"
    }

    if (burnout == true) {
        burnoutValues = "burnout"
    }

    if (tag == true) {
        tagValues = "tag"
    }

    if (casamento == true) {
        casamentoValues = "casamento"
    }

    if (alcoolismo == true) {
        alcoolismoValues = "alcoolismo"
    }


    // valor do RadioButton 
    let kms = ""

    if (checked == "2km") {
        kms = "2"
    }

    if (checked == "10km") {
        kms = "10"
    }

    if (checked == "25km") {
        kms = "25"
    }

    if (todos == true) {
        todosValues = "todos"
        infantilValue = "infantil"
        IdosoValue = "idoso"
        casaisValue = "casais"
        lgbtqValues = "lgbtq"
        pcdValues = "pcd"
        ansiedadeValue = "ansiedade"
        tocValues = "toc"
        burnoutValues = "burnout"
        tagValues = "tag"
        casamentoValues = "casamento"
        alcoolismoValues = "alcoolismo"
    }
    console.warn(kms)
    // console.warn(kms)
    // console.warn(colorOnline)
    console.warn(ansiedadeValue + " " + tocValues + " " + burnoutValues + " " + tagValues + " " + casamentoValues + " " + alcoolismoValues + " " + IdosoValue + " " + casaisValue + " " + infantilValue + " " + todosValues + " " + pcdValues + " " + lgbtqValues)
    // console.warn(IdosoValue + " " + casaisValue + " " + infantilValue + " " + todosValues + " " + pcdValues + " " + lgbtqValues)

    FuncDadosCard(kms, infantilValue, IdosoValue, casaisValue, todosValues, lgbtqValues, pcdValues, ansiedadeValue, tocValues, burnoutValues, tagValues, casamentoValues, alcoolismoValues)

    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                <View style={style["SeesionIcon"]}>

                    <TouchableHighlight>
                        <View>
                            <IconAntDesign name="search1" size={30} />
                        </View>
                    </TouchableHighlight>

                    <View style={style["Photo"]}>

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

                        <View style={style["RadioButton"]}>

                            <Text style={{ fontWeight: "bold" }}>Distância</Text>

                            <View style={style["AlignRadioButton"]}>

                                <View style={style["AlignSelects"]}>
                                    <RadioButton
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                        status={checked === '2km' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('2km')}
                                    />
                                    <Text>até 2km</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <RadioButton
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                        status={checked === '10km' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('10km')}
                                    />
                                    <Text>até 10km</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <RadioButton
                                        color="#6A5ACD"
                                        uncheckedColor="#A9A9A9"
                                        status={checked === '25km' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('25km')}
                                    />
                                    <Text>até 25km</Text>
                                </View>

                            </View>
                        </View>

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

                    <TouchableHighlight onPress={(() => sendSearch())}>
                        <View style={style["ButtonsAplicar"]}>
                            <Text style={{ color: "white", fontSize: RFPercentage(3) }}>APLICAR</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>


        </SafeAreaView >
    )
}

