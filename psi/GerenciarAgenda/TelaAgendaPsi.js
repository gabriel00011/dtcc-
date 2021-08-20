import React from "react"

import { SafeAreaView, View, TouchableHighlight } from "react-native"
import { Text } from "react-native-elements"
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons"

// importação de arquivo para estilização
import { style } from "../css/CssGerenciarAgendaPsi/GerenciarAgenda1"

export default ({ navigation }) => {
    return (
        <SafeAreaView style={style["Main"]}>

            <View style={style["SessionCenter"]}>

                {/* View de botões perfil e conta */}
                <View style={style["SessionButtonPerfil"]}>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("TelaPerfilPsi")}>
                        <View style={style["ButtonPerfil"]}>
                            <IconMaterialCommunityIcons name="account-box" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Perfil</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("GerenciarCadastroPsi")}>
                        <View style={style["ButtonConta"]}>
                            <IconMaterialCommunityIcons name="account-circle" size={25} color="#7B68EE" />
                            <Text style={{ color: "#7B68EE" }}>Conta</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={style["SessionButtonsArrows"]}>
                    <TouchableHighlight underlayColor="none">
                        <View>
                            <IconMaterialIcons name="keyboard-arrow-left" size={30} color="#A9A9A9" />
                            <Text></Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none">
                        <View>
                            <IconMaterialIcons name="keyboard-arrow-right" size={30} color="#A9A9A9" />
                            <Text></Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <View style={style["SessionConsultaAgendada"]}>

                </View>

            </View>

        </SafeAreaView>
    )
}