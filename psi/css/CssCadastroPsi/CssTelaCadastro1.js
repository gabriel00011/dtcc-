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

    // Session Radio Button
    SessionRadio: {
        marginLeft: 80,
        height: 80,
        // borderColor: "pink",
        // borderWidth: 2,
    },

    // estilização inputs
    Inputs: {
        // 40
        height: 40,
        width: "100%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 10
    },

    // Session de Botões
    ButtonSession: {
        height: 40,
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