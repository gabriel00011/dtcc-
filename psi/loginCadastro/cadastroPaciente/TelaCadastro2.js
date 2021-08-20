import React, { useState } from "react"

import { View, SafeAreaView, TextInput, Button, TouchableHighlight, ScrollView } from "react-native"
import { Text } from "react-native-elements"
import { RadioButton } from "react-native-paper"

// importação de componente de estilização
import { style } from "../../css/CssCadastroPac/CssCadastroPac2"

export default ({ navigation }) => {

    const [checked, setChecked] = useState("first")

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
                            status={checked === "first" ? "checked" : "unchecked"}
                            onPress={() => setChecked('first')} />
                        <Text style={{ fontSize: 15 }}>Masculino  </Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <RadioButton
                            color="#6A5ACD"
                            uncheckedColor="#A9A9A9"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')} value="Psicologo"
                        /><Text style={{ fontSize: 15 }}>Feminio      </Text>
                    </View>

                </View>

                <View>
                    <Text style={{ color: "#6A5ACD", marginBottom: 10 }}>Genêro</Text>
                    <Text>Enum de Gênero</Text>
                </View>
            </View>

            {/* Area de campo de inserção de texto */}
            <View style={style["InputSession"]}>
                <TextInput style={style["Inputs"]} placeholder="Nome" />
                <TextInput style={style["Inputs"]} placeholder="Sobrenome" />
                <TextInput style={style["Inputs"]} placeholder="CPF" />
                <TextInput style={style["Inputs"]} placeholder="RG" />
                <TextInput style={style["Inputs"]} placeholder="Data de Nascimento" />
                <TextInput style={style["Inputs"]} placeholder="Telefone" />
                <TextInput style={style["Inputs"]} placeholder="Celular" />
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
        </SafeAreaView>
    )
}