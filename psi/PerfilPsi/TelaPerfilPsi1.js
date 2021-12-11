import React, { useState, useEffect, useMemo } from "react"
import { View, SafeAreaView, TouchableHighlight, ScrollView, Picker, Button, TextInput, FlatList, Linking } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import DateTimePicker from '@react-native-community/datetimepicker'
import IconFeather from "react-native-vector-icons/Feather"
import { api } from "../source_config/axios"
import { style } from "../css/CssPerfilPsi/CssTelaPerfilPsi"
import { getDados, session, SessionDadosPsi } from "../functions/getSessionPsi"
import {  updateHours, DeleteHours, addPublic, delteSession } from "../functions/HoursUpDelIn"

export default ({ route, navigation }) => {

    try {

        var { email } = route.params

    } catch (e) {

    }

    const [listDadosPsi, setListDados] = useState([])
    const [segData, setDataSeg] = useState([])
    const [terData, setDataTer] = useState([])
    const [quaData, setDataQua] = useState([])
    const [quiData, setDataQui] = useState([])
    const [sexData, setDataSex] = useState([])
    const [agenda, setAgenda] = useState([])
    const [selectedValuePubli, setSelectedValuePubli] = useState("")
    const [selectedValueEsp, setSelectedValueEsp] = useState("")

    useEffect(() => {

        try {

            async function getDataPsicolgo() {

                const callDataPsi = await api.get("/getDadosPsicologo/" + email)
                    .then(DadosPsicologo => DadosPsicologo.data)
                    .then(renderDados => {
                        setListDados(renderDados.resultado)
                        setDataSeg(renderDados.resultSeg)
                        setDataTer(renderDados.resultTer)
                        setDataQua(renderDados.resultQua)
                        setDataQui(renderDados.resultQui)
                        setDataSex(renderDados.resultSex)
                        setAgenda(renderDados.resultAgends)
                    }).catch((e) => {
                        console.log(e)
                    })
            }

            getDataPsicolgo()

        } catch (err) {
            console.log(err)
        }
    }, [])

    try {
        var Id_psicologo = listDadosPsi[0]?.psi_in_codigo
    } catch (e) {

    }

    try {

        var pa_st_telefone = agenda[0]?.pa_st_celular
        var id_session = agenda[0].age_in_codigo
        var age_dia_agendado = agenda[0].age_dia_agendado
        var age_hora_agendado = agenda[0].age_hora_agendado
        var pa_st_nome = agenda[0].pa_st_nome
        var pa_st_sobrenome = agenda[0].pa_st_sobrenome

    } catch (e) {
        console.log(e)
    }

    async function ReloadBanco() {

        try {

            const getDataHoursPsicologo = await api.get("/getDadosPsicologo/" + email)
                .then(DadosPsicologo => DadosPsicologo.data)
                .then(renderDados => {
                    setListDados(renderDados.resultado)
                    setDataSeg(renderDados.resultSeg)
                    setDataTer(renderDados.resultTer)
                    setDataQua(renderDados.resultQua)
                    setDataQui(renderDados.resultQui)
                    setDataSex(renderDados.resultSex)
                }).catch(e => {
                    console.log(e)
                })

        } catch (err) {
            console.log(err)
        }

    }

    const [dateValue, setDateValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("seg")
    const [selectUpdate, setSelectUpdate] = useState("seg")

    // insert de horas
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("time");
    const [show, setShow] = useState(false);


    const hours = date.getHours() + ":" + date.getMinutes().toString()
    // console.log(hours)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTimepicker = () => {
        showMode('time');
    };

    // update de horas parte - 1
    const [date1, setDate1] = useState(new Date());
    const [mode1, setMode1] = useState("time");
    const [show1, setShow1] = useState(false);

    const hours1 = date1.getHours() + ":" + date1.getMinutes().toString()
    // console.log(hours1)

    const onChange1 = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow1(Platform.OS === 'ios');
        setDate1(currentDate);
    };

    const showMode1 = (currentMode) => {
        setShow1(true);
        setMode1(currentMode);
    };

    const showTimepicker1 = () => {
        showMode1('time');
    };

    // update de horas parte - 2

    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState("time");
    const [show2, setShow2] = useState(false);

    const hours2 = date2.getHours() + ":" + date2.getMinutes().toString()
    console.log(date2)

    const onChange2 = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow2(Platform.OS === 'ios');
        setDate2(currentDate);
    };

    const showMode2 = (currentMode) => {
        setShow2(true);
        setMode2(currentMode);
    };

    const showTimepicker2 = () => {
        showMode2('time');
    };


    return (

        <SafeAreaView style={style["Main"]}>

            {/* Centralizar View */}
            <ScrollView style={style["SessionCenter"]} vertical={true} >

                <View style={style["SessionButtonAgenda"]}>

                    <View style={style["SessionButtonAgendaB"]}>

                        <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("TelaAgendaPsi", { idPsi: Id_psicologo })}>
                            <View style={style["ButtonAgenda"]} >
                                <IconAntDesign name="book" size={25} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE" }}>Agenda</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPsi", { idPsi: Id_psicologo })}>
                            <View style={style["ButtonConta"]}>
                                <IconMaterialCommunityIcons name="account-circle" size={25} color="#7B68EE" />
                                <Text style={{ color: "#7B68EE" }}>Conta</Text>
                            </View>
                        </TouchableHighlight>

                    </View>


                    <TouchableHighlight underlayColor="none" onPress={() => { navigation.replace("Login") }}>
                        <View style={{ marginLeft: 15 }}>
                            <Text><IconFeather name="log-out" size={30} color="#696969" /></Text>
                        </View>
                    </TouchableHighlight>

                </View>

                {/* View de Nome e CRP */}
                <View style={style["SessionDados"]}>


                    <View style={style["Photo"]}>
                        {listDadosPsi.map((value) => (
                            <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}> {value.psi_st_nome.charAt().toUpperCase()} </Text>
                        ))}
                    </View>

                    <View style={style["NomeCrp"]}>
                        {listDadosPsi.map((value) => (
                            <>
                                <Text style={{ fontWeight: "bold", color: "black" }}> {value.psi_st_nome} {value.psi_st_sobrenome} </Text>
                                <Text style={{ color: "gray" }}>{value.psi_st_crp} </Text>
                            </>
                        ))}

                    </View>
                </View>

                {/* View de direcionamento para consulta */}
                <View style={style["SessionDirectConsulta"]}>

                    <View style={style["DadosHoraConsulta"]}>
                        <ScrollView horizontal={true}>
                            <Text>Proxima consulta ás {age_dia_agendado}</Text>
                        </ScrollView>
                        <Text>{pa_st_nome} {pa_st_sobrenome}</Text>
                    </View>

                    <View style={style["SessionButtonConsulta"]}>

                        <View style={style["StatusOnlinePresencial"]}>
                            <Text style={{ fontWeight: "bold", color: "gray" }}>Online</Text>
                        </View>

                        <TouchableHighlight underlayColor="none" onPress={() => {
                            try {

                                Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {

                                    return Linking.openURL(
                                        `whatsapp://send?phone=${pa_st_telefone}&text=Oi`
                                    );

                                })
                            } catch (e) {
                                console.log(e)
                            }

                        }}>
                            <View style={style["ButtonConsulta"]}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>Ir para sessão</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                </View>

                {/* View de grupo e especilidade */}
                <View style={style["SessionGroup"]}>

                    <View style={style["SessionGroup0"]}>

                        <View>
                            <Text style={{ fontWeight: "bold" }}>  Público</Text>
                            <Picker
                                selectedValue={selectedValuePubli}
                                style={{ height: 50, width: 170 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValuePubli(itemValue)}
                            >
                                <Picker.Item label="Não selecionado" />
                                <Picker.Item label="Idoso" value="A" />
                                <Picker.Item label="Casais" value="B" />
                                <Picker.Item label="LGBTQIA+" value="C" />
                                <Picker.Item label="PcD" value="D" />
                                <Picker.Item label="Infantil" value="E" />
                            </Picker>
                        </View>

                        <View style={style["centerSelect"]}>

                            <Text style={{ fontWeight: "bold" }}>  Especialidade</Text>

                            <Picker
                                selectedValue={selectedValueEsp}
                                style={{ height: 50, width: 170 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueEsp(itemValue)}
                            >
                                <Picker.Item label="Não selecionado" />
                                <Picker.Item label="Ansiedade" value="F" />
                                <Picker.Item label="TOC" value="G" />
                                <Picker.Item label="Burnout" value="H" />
                                <Picker.Item label="TAG" value="I" />
                                <Picker.Item label="Casamento" value="J" />
                                <Picker.Item label="Alcoolismo" value="K" />

                            </Picker>

                        </View>
                    </View>

                    <View style={{ width: "100%", alignItems: "center", marginBottom: 40 }}>
                        <TouchableHighlight underlayColor="none" onPressIn={async () => {
                            await addPublic(selectedValuePubli, selectedValueEsp, Id_psicologo)
                        }}>
                            <View style={style["SameButton"]}>
                                <Text style={{ color: "white" }}>Adicionar</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </View>

                {/* Tabela de horário de consulta*/}
                <ScrollView contentContainerStyle={style["SessionTable"]}>

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

                    <View style={style["OrdersDay"]}>

                        <View style={{ alignItems: "center" }}>
                            <Text>seg</Text>
                            <View style={style["orderHous"]}>
                                <View style={{ height: 10 }}></View>
                                {segData.map((value) => (
                                    <View style={style["styleHour"]}>
                                        <Text key={value.id_segunda}> {value.hr_segunda} </Text>
                                    </View>
                                ))}
                            </View>
                        </View>


                        <View style={{ alignItems: "center" }}>
                            <Text>ter</Text>
                            <View style={style["orderHous"]} >
                                <View style={{ height: 10 }}></View>
                                {terData.map((value) => (
                                    <View style={style["styleHour"]}>
                                        <Text key={value.id_terca}> {value.hr_terca} </Text>
                                    </View>
                                ))}
                            </View>
                        </View>


                        <View style={{ alignItems: "center" }}>
                            <Text>qua</Text>
                            <View style={style["orderHous"]}>
                                <View style={{ height: 10 }}></View>
                                {quaData.map((value) => (
                                    <View style={style["styleHour"]}>
                                        <Text key={value.id_quarta}> {value.hr_quarta} </Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text>qui</Text>
                            <View style={style["orderHous"]}>
                                <View style={{ height: 10 }}></View>
                                {quiData.map((value) => (
                                    <Text style={style["styleHour"]} key={value.id_quinta}> {value.hr_quinta} </Text>
                                ))}
                            </View>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text>sex</Text>
                            <View style={style["orderHous"]}>
                                <View style={{ height: 10 }}></View>
                                {sexData.map((value) => (
                                    <Text style={style["styleHour"]} key={value.id_sexta}> {value.hr_sexta} </Text>
                                ))}
                            </View>

                        </View>

                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}

                        {show1 && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date1}
                                mode={mode1}
                                is24Hour={true}
                                display="default"
                                onChange={onChange1}
                            />
                        )}

                        {show2 && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date2}
                                mode={mode2}
                                is24Hour={true}
                                display="default"
                                onChange={onChange2}
                            />
                        )}

                    </View>

                    <View style={style["buttonUpdate"]}>

                        <TouchableHighlight underlayColor="none" onPress={() => {
                            ReloadBanco()
                        }}>
                            <View style={style["buttonUp"]}>
                                <Text style={{ color: "white" }}>Atualizar tabela</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                    {/* INSERIR HORARIO  */}
                    <View style={style["OrderButtons"]}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 120 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >

                            <Picker.Item label="Seg" value="seg" />
                            <Picker.Item label="Ter" value="ter" />
                            <Picker.Item label="Quar" value="qua" />
                            <Picker.Item label="qui" value="qui" />
                            <Picker.Item label="Sex" value="sex" />

                        </Picker>

                        <View style={style["setHour"]}>

                            <TouchableHighlight underlayColor="none" onPressIn={() => showTimepicker("time")}>
                                <View style={style["buttonHour"]}>
                                    <Text style={{ color: "white" }}>Horario</Text>
                                </View>
                            </TouchableHighlight>

                            <View style={style["FieldData"]}>
                                <View><Text>{hours}</Text></View>
                            </View>
                        </View>

                        <View style={style["orderUpAndDelte"]}>

                            <TouchableHighlight underlayColor="none" onPressIn={async () =>
                                await InsertHours(Id_psicologo, selectedValue, hours)
                            }>
                                <View style={style["buttonUpAndDel"]}>
                                    <Text style={{ color: "white" }}>Adicionar</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor="none" onPressIn={async () => {
                                await DeleteHours(Id_psicologo, selectedValue, hours)
                            }}>
                                <View style={style["buttonUpAndDel"]}>
                                    <Text style={{ color: "white" }}>Deletar</Text>
                                </View>
                            </TouchableHighlight>

                        </View>

                    </View>

                    <View>

                        <Text style={{ fontWeight: "bold", color: "gray" }}>Atualizar horário</Text>

                        <View>

                            <Picker
                                selectedValue={selectUpdate}
                                style={{ height: 50, width: 120 }}
                                onValueChange={(itemValue, itemIndex) => setSelectUpdate(itemValue)}
                            >

                                <Picker.Item label="Seg" value="seg" />
                                <Picker.Item label="Ter" value="ter" />
                                <Picker.Item label="Quar" value="qua" />
                                <Picker.Item label="qui" value="qui" />
                                <Picker.Item label="Sex" value="sex" />

                            </Picker>

                            <View style={style["OrderUpdate"]}>

                                <TouchableHighlight underlayColor="none" onPress={() => showTimepicker1("time")}>
                                    <View style={style["buttonHour"]}>
                                        <Text style={{ color: "white" }}>Atual</Text>
                                    </View>
                                </TouchableHighlight>

                                <View style={style["FieldData"]}>
                                    <View><Text>{hours1}</Text></View>
                                </View>

                                <TouchableHighlight underlayColor="none" onPress={() => showTimepicker2("time")}>
                                    <View style={style["buttonHour"]}>
                                        <Text style={{ color: "white" }}>Novo horario</Text>
                                    </View>
                                </TouchableHighlight>

                                <View style={style["FieldData"]}>
                                    <View><Text>{hours2}</Text></View>
                                </View>

                                <View style={{ width: "100%", alignItems: "center", marginBottom: 40 }}>
                                    <TouchableHighlight underlayColor="none" onPress={() => {
                                        updateHours(hours1, hours2, Id_psicologo, selectUpdate)
                 
                                    }}>
                                        <View style={style["SameButton"]}>
                                            <Text style={{ color: "white" }}>Atualizar</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>

                            </View>

                        </View>
                    </View>

                    <View style={{ height: 100, width: "100%" }}>
                        <TextInput placeholder="fale sobre você" style={{ height: 30, width: "100%", justifyContent: "flex-start", alignItems: "flex-start" }} />
                    </View>

                    <View style={{ width: "100%", alignItems: "center" }}>
                        <TouchableHighlight underlayColor="none">
                            <View style={style["SameButton"]}>
                                <Text style={{ color: "white" }}>Adicionar Perfil</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                </ScrollView>

            </ScrollView>

        </SafeAreaView >
    )
}