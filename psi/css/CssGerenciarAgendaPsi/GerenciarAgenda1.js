import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        width: "100%",
        borderWidth: 1,
        borderColor: "green",
        alignItems: "center",
        backgroundColor:"#FFFFFF"
    },

    SessionCenter: {
        flex: 1,
        width: "90%",
        borderColor: "blue",
        borderWidth: 1,
        backgroundColor:"#FFFFFF"
    },

    // Session perfil e agenda
    SessionButtonPerfil: {
        height: 60,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "black",
        flexDirection: "row",
        marginTop: 50
    },

    // Botões de perfil e agenda
    ButtonPerfil: {
        height: 40,
        width: 120,
        borderWidth: 2,
        borderColor: "#7B68EE",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    ButtonConta: {
        height: 40,
        width: 120,
        borderWidth: 2,
        borderColor: "#7B68EE",
        marginLeft: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    
    // Session Seta
    SessionButtonsArrows: {
        height: 30,
        width: "100%",
        borderColor: "green",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    // Session de Consultas Agendadas
    SessionConsultaAgendada: {
        height: "70%",
        width: "100%",
        borderColor: "brown",
        borderWidth: 1
    }

})