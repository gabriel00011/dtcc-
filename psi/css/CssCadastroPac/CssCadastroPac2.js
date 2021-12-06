import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Elemento pai
    Main: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: "yellow",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor:"#FFFFFF"
    },

    // Session de Gênero
    GeneroSession: {
        width: "100%",
        height: 100,
        // borderWidth: 1,
        // borderColor: "green",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: -10,
        backgroundColor:"#FFFFFF"
    },

    // Session de campo de inputs
    InputSession: {
        // borderColor: "red",
        // borderWidth: 1,
        marginTop: -10
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
        justifyContent: "space-between",
        marginTop: -20
    },

    // Botões
    Buttons: {
        height: 40,
        width: 150,
        backgroundColor: "#6A5ACD",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    orderDate: {
        width: "100%",
        height: 40,
        // borderColor: "#A9A9A9",
        // borderWidth: 2,
        // borderRadius: 4,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

})