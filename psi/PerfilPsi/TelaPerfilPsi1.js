import React, { useState, useEffect, useMemo } from "react"

import axios from "axios"
import { View, SafeAreaView, TouchableHighlight, ScrollView, Picker, Button, TextInput, FlatList } from "react-native"
import { Text } from "react-native-elements"
import IconAntDesign from "react-native-vector-icons/AntDesign"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker from 'react-native-datepicker'

// importação arquivos externos
import { style } from "../css/CssPerfilPsi/CssTelaPerfilPsi"
import { getDados, session, SessionDadosPsi } from "../functions/getSessionPsi"

import { InsertHours, updateHours, DeleteHours } from "../functions/HoursUpDelIn"

export default ({ navigation }) => {

    const [listDadosPsi, setListDados] = useState([])
    const [setDados, setDadosPsi] = useState([])
    const [segData, setDataSeg] = useState([])
    const [terData, setDataTer] = useState([])
    const [quaData, setDataQua] = useState([])
    const [quiData, setDataQui] = useState([])
    const [sexData, setDataSex] = useState([])


    useEffect(() => {

        try {

            axios.get("http://192.168.15.223/getDadosPsicologo/" + SessionDadosPsi.email)
                .then(DadosPsicologo => DadosPsicologo.data)
                .then(renderDados => {
                    setListDados(renderDados)
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


    const listItemIfy = JSON.stringify(listDadosPsi)
    const listItemParse = JSON.parse(listItemIfy)

    try {

        var nome = listItemParse.resultado[0].psi_st_nome
        var sobrenome = listItemParse.resultado[0].psi_st_sobrenome
        var crp = listItemParse.resultado[0].psi_st_crp
        var Id_psicologo = listItemParse.resultado[0].psi_in_codigo
        var email = listItemParse.resultado[0].psi_st_email

    } catch (e) {
        console.log(e)
    }

    async function ReloadBanco(email) {

        try {

            axios.get("http://192.168.15.223/getDadosPsicologo/" + email)
                .then(DadosPsicologo => DadosPsicologo.data)
                .then(renderDados => {
                    // setListDados(renderDados)
                    setDataSeg(renderDados.resultSeg)
                    setDataTer(renderDados.resultTer)
                    setDataQua(renderDados.resultQua)
                    setDataQui(renderDados.resultQui)
                    setDataSex(renderDados.resultSex)

                    setTimeout(() => {
                        setDataSeg(renderDados.resultSeg)
                        setDataTer(renderDados.resultTer)
                        setDataQua(renderDados.resultQua)
                        setDataQui(renderDados.resultQui)
                        setDataSex(renderDados.resultSex)
                    }, 2000)
                })

        } catch (e) {
            console.log(e)
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
    // console.log(hours2)

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


            <ScrollView style={style["SessionCenter"]} vertical={true} >
                {/* Centralizar View */}


                <View style={style["SessionButtonAgenda"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("TelaAgendaPsi")}>
                        <View style={style["ButtonAgenda"]} >
                            <IconAntDesign name="book" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Agenda</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPsi", { dadosId: listDadosPsi })}>
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
                        <Text style={{ fontWeight: "bold" }}>{nome} {sobrenome}</Text>
                        <Text style={{ color: "gray" }}>{crp} </Text>
                    </View>


                </View>

                {/* View de direcionamento para consulta */}
                <View style={style["SessionDirectConsulta"]}>

                    <View style={style["DadosHoraConsulta"]}>
                        <ScrollView horizontal={true}>
                            <Text>Proxima consulta ás 00: 00</Text>
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

                            <TouchableHighlight underlayColor="none" onPress={() => showTimepicker("time")}>
                                <View style={style["buttonHour"]}>
                                    <Text style={{ color: "white" }}>Horario</Text>
                                </View>
                            </TouchableHighlight>

                            <View style={style["FieldData"]}>
                                <View><Text>{hours}</Text></View>
                            </View>
                        </View>

                        <View style={style["orderUpAndDelte"]}>

                            <TouchableHighlight underlayColor="none" onPress={() => {
                                ReloadBanco(email)
                                InsertHours(Id_psicologo, selectedValue, hours)
                            }}>
                                <View style={style["buttonUpAndDel"]}>
                                    <Text style={{ color: "white" }}>Adicionar</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight underlayColor="none" onPress={() => {
                                ReloadBanco(email)
                                DeleteHours(Id_psicologo, selectedValue, hours)
                            }}>
                                <View style={style["buttonUpAndDel"]}>
                                    <Text style={{ color: "white" }}>deletar</Text>
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
                                        <Text style={{ color: "white" }}>atual</Text>
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
                                        ReloadBanco(email)
                                    }}>
                                        <View style={style["SameButton"]}>
                                            <Text style={{ color: "white" }}>Atualizar {console.log(hours1, hours2, Id_psicologo, selectUpdate)}</Text>
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