import React, { useState, useContext, useMemo } from "react"

import { View, SafeAreaView, TextInput, Button, TouchableHighlight, ScrollView, Picker } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"
import DateTimePicker from '@react-native-community/datetimepicker'

// importação de componente de estilização
import { style } from "../../css/CssCadastroPac/CssCadastroPac2"
import { FuncDadosPac2 } from "../../functions/CadastroPaciente"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("masculino")
    const [nameValue, setNameInput] = useState("")
    const [middlenameValue, setMiddlenameInput] = useState("")
    const [cpfValue, setCpfInput] = useState("")
    const [rgValue, setRgInput] = useState("")
    const [telefoneValue, setTelefoneInput] = useState("")
    const [celValue, setCelInput] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [dateValue, setDateValue] = useState("")

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("time");
    const [show, setShow] = useState(false);

    const convertDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()

    console.log(convertDate)

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
        showMode('date');
    };

    FuncDadosPac2(nameValue, middlenameValue, cpfValue, convertDate, rgValue, telefoneValue, celValue, selectedValue, checked)

    return (
        // View Elemento Filho/Pai
        <SafeAreaView style={style.Main}>

            {/* Seleções de genero */}
            <View style={style["GeneroSession"]}>

                <View>

                    <Text style={{ color: "#6A5ACD", marginBottom: 10 }}>sexo</Text>

                    <View value="Paciente" style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === "masculino" ? "checked" : "unchecked"}
                            onPress={() => setChecked('masculino')} />
                        <Text style={{ fontSize: 15 }}>Masculino  </Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === 'feminino' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('feminino')} value="Psicologo"
                        /><Text style={{ fontSize: 15 }}>Feminio      </Text>
                    </View>

                </View>

                <View>

                    <Text style={{ color: "#6A5ACD", marginBottom: 10 }}>Genêro</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 170 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Não selecionado" />
                        <Picker.Item label="Transgênero" value="Transgenero" />
                        <Picker.Item label="Não binário" value="Nao binario" />
                        <Picker.Item label="Cisgênero" value="Cisgenero" />

                    </Picker>


                </View>

            </View>


            {/* Area de campo de inserção de texto */}
            <View style={style["InputSession"]}>

                <TextInput style={style["Inputs"]}
                    onChangeText={(name) => setNameInput(name)} placeholder="Nome" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(middlename) => setMiddlenameInput(middlename)} placeholder="Sobrenome" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cpf) => setCpfInput(cpf)} placeholder="CPF" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(rg) => setRgInput(rg)} placeholder="RG" />

                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        height: 40,
                        width: "70%",
                        borderColor: "#A9A9A9",
                        borderWidth: 2,
                        borderRadius: 4,
                        marginBottom: 10,
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                        <Text>{convertDate}</Text>

                    </View>

                    {show && (
                        <DateTimePicker
                            style={style["Inputs"]}
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="spinner"
                            onChange={onChange}
                        />
                    )}

                    <TouchableHighlight onPress={showTimepicker} underlayColor="none">
                        <View style={{
                            height: 40, width: "200%", justifyContent: "center", alignItems: "center", backgroundColor: "#6A5ACD", borderRadius: 7
                        }}>
                            <Text style={{ color: "white" }}>hours</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <TextInput style={style["Inputs"]}
                    onChangeText={(tel) => setTelefoneInput(tel)} placeholder=" Telefone" />

                <TextInput style={style["Inputs"]}
                    onChangeText={(cel) => setCelInput(cel)} placeholder=" Ex cel: 5511xxxxxxxx" />

            </View>
            {/*style Botões de navegação de telas */}
            <View style={style.ButtonSession}>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac1")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPac3")}>
                    <View style={style.Buttons}>
                        <Text style={{ color: "white" }}>Proximo</Text>
                    </View>
                </TouchableHighlight>

            </View>

        </SafeAreaView >
    )
}