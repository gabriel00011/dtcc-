import React from "react"

import { View, SafeAreaView, TouchableHighlight, TextInput } from "react-native"
import { Text } from "react-native-elements"

// importação componente de estilização
import { style } from "../../css/CssCadastroPsi/CssTelaCadastro3"

export default ({ navigation }) => {
    return (
        <SafeAreaView style={style.Main}>

            {/* Area de campo de inserção de texto */}
            <View style={style["InputSession"]}>
                <TextInput style={style["Inputs"]} placeholder="CEP" />
                <TextInput style={style["Inputs"]} placeholder="Rua" />
                <TextInput style={style["Inputs"]} placeholder="Nº" />
                <TextInput style={style["Inputs"]} placeholder="Complementos" />
                <TextInput style={style["Inputs"]} placeholder="Bairro" />
                <TextInput style={style["Inputs"]} placeholder="Cidade" />
                <Text>Enum estado</Text>
            </View>

            {/* Botões de navegação de telas */}
            <View style={style["ButtonSession"]}>
                <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("ScreenPsi2")}>
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Voltar</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="none">
                    <View style={style["Buttons"]}>
                        <Text style={{ color: "white" }}>Finalizar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}