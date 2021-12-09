// Tela que receberá o estático para transações das telas "Navigations"
import React, { useContext } from "react"

import { View, SafeAreaView, TouchableHighlight, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native"
import { Text } from "react-native-elements"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

// importação de telas de cadastro para psicologos
import ScreenRegister1 from "./TelaCadastro1"
import ScreenRegister2 from "./telaCadastro2"
import ScreenRegister3 from "./TelaCadastro3"

// importação de telas de cadastro para pacientes
import ScreenRegisterPac1 from "../cadastroPaciente/TelaCadastro1"
import ScreenRegisterPac2 from "../cadastroPaciente/TelaCadastro2"
import ScreenRegisterPac3 from "../cadastroPaciente/TelaCadastro3"

// importação da estilização CSS
import { style } from "../../css/CssCadastroPsi/CssCadastroPsi"


const Stack = createNativeStackNavigator()

export default ({ navigation }) => {


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : null}
            keyboardVerticalOffset={0}
            style={style["Main"]}>

            <View style={style["MainChildren"]}>

                {/* View de Botões de navegação entre as telas */}
                <View style={style["ButtonNavigation"]}>
                    <TouchableHighlight underlayColor="none" onPress={() => navigation.navigate("Login")}>
                        <View>
                            <Text h4>Login</Text>
                        </View>
                    </TouchableHighlight>


                    <Text style={{
                        color: "#6A5ACD", borderColor: "#6A5ACD", borderBottomWidth: 7,
                        padding: 10
                    }} h4>Cadastrar</Text>


                </View>
                {/* View de area de Cadastro Psicologo -- Navigations --*/}

                <ScrollView contentContainerStyle={style["ViewNavigation"]}>
                   
                    
                        <Stack.Navigator initialRouteName="ScreenPac1" screenOptions={{ headerShown: false }}>

                            {/* Navegação de telas do Psicologos */}
                            <Stack.Screen name="ScreenPac1" component={ScreenRegisterPac1} />
                            <Stack.Screen name="ScreenPac2" component={ScreenRegisterPac2} />
                            <Stack.Screen name="ScreenPac3" component={ScreenRegisterPac3} />

                            {/* Navegação de telas do Psicologos */}
                            <Stack.Screen name="ScreenPsi1" component={ScreenRegister1} />
                            <Stack.Screen name="ScreenPsi2" component={ScreenRegister2} />
                            <Stack.Screen name="ScreenPsi3" component={ScreenRegister3} />

                        </Stack.Navigator>
               
                </ScrollView>

            </View>
        </KeyboardAvoidingView >
    )
}
