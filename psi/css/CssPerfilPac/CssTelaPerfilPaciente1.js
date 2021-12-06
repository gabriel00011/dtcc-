import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Session de elemento principal
    Main: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: "green",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FFFFFF"
    },

    // Centralizar View
    CenterSession: {
        flex: 1,
        width: "90%",
        // borderColor: "blue",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        backgroundColor:"#FFFFFF"
    },

    SessionIcon: {
        height: 50,
        width: "100%",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    // Session de endereço psicologo
    SessionAddress: {
        height: 200,
        // borderColor: "yellow",
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 30
    },

    //Session da view de endereço, view elemento foto - filho
    Photo: {
        height: 70,
        width: 70,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 300,
        justifyContent: "center",
        alignItems: "center"
    },

    // Session de grupo
    SessionGroup: {
        // width: 320,
        height: 150,
        // borderColor: "black",
        // borderWidth: 1,
        marginBottom: 30,
        flexDirection: "column",
    },

    ButtonGroup1: {
        height: 25,
        width: 70,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25
    },

    ButtonGroup2: {
        height: 25,
        width: 70,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginLeft: 35
    },

    OderButtonsGroup: {
        marginTop: 5,
        flexDirection: "row"
    },

    ButtonGroupEspecilidade1: {
        height: 25,
        width: 110,
        borderColor: "gray",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 25,
        marginTop: 50
    },

    // Session de apresentação
    SessionApresentacao: {
        width: "100%",
        // borderColor: "purple",
        // borderWidth: 1,
        marginBottom: 30
    },

    // Session de comentário
    SessionComents: {
        width: "100%",
        // borderColor: "pink",
        // borderWidth: 1,
        marginBottom: 40
    },

    // Session de tabela
    SessionTable: {
        height: 400,
        width: "100%",
        marginTop: 50,
        // borderColor: "brown",
        // borderWidth: 1,
    },

    // Session de botões de view da tabela
    SessionButtonsTable: {
        height: 60,
        width: "100%",
        // borderColor: "yellow",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    ButtonsOnline: {
        height: 40,
        width: 100,
        borderColor: "#6A5ACD",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },

    ButtonsPresencial: {
        height: 40,
        width: 150,
        borderColor: "#6A5ACD",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
})