import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Elemento pai
    Main: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },

    // Centralziar View
    SessionCenter: {
        flex: 1,
        width: "90%",
    },

    // Session botões de Perfil e Conta
    SessionButtonPerfil: {
        marginTop: 35,
        width: "100%",
        flexDirection: "row"
    },

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
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginLeft: 10
    },

    DadosPsi: {
        marginTop: 25,
        height: 100,
        width: "100%",
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 3,
        alignItems: "flex-start",
        justifyContent: "center",
    },

    Dados: {
        marginLeft:10
    },

         
})
