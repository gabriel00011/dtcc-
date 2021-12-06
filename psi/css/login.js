import React from "react"

import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    //   Estilo do elemento Pai
    Main: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // borderColor: "green",
        // borderWidth: 3,
        flexDirection: "column",
        backgroundColor:"#FFFFFF"
},
    // Centralização ao elemento pai - Filho
    MainChildren: {
        flex: 1,
        flexDirection: "column",
        width: "90%",
        // borderColor: "blue",
        // borderWidth: 1,
        backgroundColor: "white",
        backgroundColor:"#FFFFFF"
    },
    // Logo - Filho
    Logo: {
        marginTop: "15%",
        height: 190,
        width: "100%",
        // borderColor: "gray",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // Sessão Botões de navegação - Filho
    ButtonSession: {
        marginTop: 10,
        height: 80,
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    // campos de inserção, entrar e esqueceu a senha
    Footer: {
        height: 400,
        width: "100%",
        // borderColor: "red",
        // borderWidth: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    // session de input
    InputsSession: {
        // height: 250,
        width: "100%",
        // borderColor: "pink",
        // borderWidth: 2,
    },

    Inputs: {
        height: 40,
        width: "100%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4
    },

    // Buttons
    ButtonLogIn: {
        height: 40,
        width: 150,
        backgroundColor: "#6A5ACD",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },

})