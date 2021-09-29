import React, { useState, useEffect } from "react"

import { SafeAreaView, View, TouchableHighlight, ScrollView, CheckBox } from "react-native"
import { Text } from "react-native-elements"

import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconFeather from "react-native-vector-icons/Feather"
import { RadioButton } from "react-native-paper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
// importação de arquivo para estilização
import { style } from "../css/CssMapa/CssMapa"

import axios from "axios"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("first")
    const [infantil, setInfantil] = useState(false)
    const [idoso, setIdoso] = useState(false)
    const [casais, setCasais] = useState(false)

    const [colorOnline, setColorOnline] = useState("")
    const [colorPresencial, setcolorPresencial] = useState("")


    // valor do checkbox 
    let IdosoValue = ""
    let casaisValue = ""
    let infantilValue = ""

    if (infantil == true) {
        infantilValue = "infantil"
    }

    if (idoso == true) {
        IdosoValue = "idoso"
    }

    if (casais == true) {
        casaisValue = "casais"
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

    // console.warn(IdosoValue + casaisValue + infantilValue)
    // console.warn(kms)
    // console.warn(colorOnline)

    return (

        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View de botões icons */}
                <View style={style["SessionIcons"]}>

                    <View style={style["SessionButtonsSearch"]}>
                        <TouchableHighlight>
                            <View style={{ borderBottomColor: "#7B68EE", borderBottomWidth: 3 }}>
                                <IconFontAwesome5 name="map-marked-alt" size={30} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE", fontWeight: "bold" }}>Mapa</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View>
                                <IconMaterialCommunityIcons name="account-box-outline" size={30} />
                                <Text>Card</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={style["SessionButtonsExit"]}>
                        <TouchableHighlight>
                            <View>
                                <IconAntDesign name="search1" size={30} />
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight>
                            <View>
                                <IconFeather name="log-out" size={30} />
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                {/* View Botões de online*/}
                <View style={style["SessionModalidade"]}>

                    <Text style={{ fontWeight: "bold" }}>Modalidade</Text>

                    <View style={style["SessionButtonsTipo"]}>

                        <TouchableHighlight
                            underlayColor="none"
                            // onPress={() => setColorOnline("#A9A9A9")}
                            style={style["ButtonsOnline"]}>
                            <View>
                                <Text style={{ color: "#7B68EE" }}>Online</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="none"
                            // onPress={() => setcolorPresencial("#7B68EE")}
                            style={style["ButtonsPresencial"]}>
                            <View>
                                <Text style={{ color: "#7B68EE" }}>Presencial</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                </View>

                {/* View se seleção */}
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

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={infantil}
                                        onValueChange={setInfantil}
                                    />
                                    <Text>Infantil</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={idoso}
                                        onValueChange={setIdoso}
                                    /><Text>Idoso</Text>
                                </View>

                                <View style={style["AlignSelects"]}>
                                    <CheckBox
                                        value={casais}
                                        onValueChange={setCasais}
                                    /><Text>Casais</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={{ textAlign: "right" }}>Especialistas em...</Text>
                    </View>

                    <View style={style["SessionCenterButtonAplicar"]}>

                        <TouchableHighlight>
                            <View style={style["ButtonsAplicar"]}>
                                <Text style={{ color: "white", fontSize: RFPercentage(3) }}>APLICAR</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                {/* View Mapa */}
                <View style={style["SessionMapa"]}>

                </View>

            </View>
        </SafeAreaView>

    )
}