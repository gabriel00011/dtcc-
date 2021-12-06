import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        // borderColor: "pink",
        // borderWidth: 2,
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor:"#FFFFFF"
    },

    // Session de campo de inputs
    InputSession: {
        // borderColor: "red",
        // borderWidth: 1
    },

    // estilização de inputs
    Inputs: {
        height: 40,
        width: "100%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 10
    },



    // Session de botões
    ButtonSession: {
        height: 45,
        width: "100%",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    // Botões
    Buttons: {
        height: 40,
        width: 150,
        backgroundColor: "#6A5ACD",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    }
})