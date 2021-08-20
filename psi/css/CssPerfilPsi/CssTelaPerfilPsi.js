import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Elemento pai
    Main: {
        flex: 1,
        width: "100%",
        // borderColor: "green",
        // borderWidth: 2,
        alignItems: "center"
    },

    // centralziar View
    SessionCenter: {
        flex: 1,
        width: "90%",
        // borderColor: "black",
        // borderWidth: 1
    },

    // Session botões de Agenda e Conta
    SessionButtonAgenda: {
        marginTop: 35,
        // height: 50,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        flexDirection: "row"
    },

    ButtonAgenda: {
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

    // Session Dados Psicologo foto
    SessionDados: {
        height: 100,
        width: "100%",
        // borderWidth: 2,
        // borderColor: "#7B68EE",
        flexDirection: "row",
        alignItems: "center"
    },

    Photo: {
        height: 70,
        width: 70,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 300,
        justifyContent: "center",
        alignItems: "center"
    },

    NomeCrp: {
        height: 70,
        width: 150,
        // borderColor: "gray",
        // borderWidth: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: 30
    },

    // Session inicio de consulta
    SessionDirectConsulta: {
        height: 60,
        width: "100%",
        borderWidth: 2,
        borderRadius: 3,
        borderColor: "gray",
        flexDirection: "row",
        backgroundColor: "#DCDCDC"
    },

    DadosHoraConsulta: {
        height: 50,
        width: "55%",
        // borderWidth: 1,
        // borderColor: "pink",
        alignItems: "center"
    },

    SessionButtonConsulta: {
        height: "100%",
        width: "40%",
        // borderWidth: 1,
        // borderColor: "blue",
        alignItems: "flex-end",
    },

    StatusOnlinePresencial: {
        height: 25,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },

    ButtonConsulta: {
        marginTop: 10,
        height: 30,
        width: 130,
        backgroundColor: "#6A5ACD",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    },

    // Session de grupo
    SessionGroup: {
        // width: 320,
        height: 110,
        // borderColor: "black",
        // borderWidth: 1,
        marginTop: 20,
        // marginBottom: 20,
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
        marginTop: 10,
        flexDirection: "row"
    },

    ButtonGroupEspecilidade1: {
        height: 25,
        width: 110,
        borderColor: "gray",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 25,
        marginTop: 15
    },

    // Session de tabela
    SessionTable: {
        height: 100,
        width: "100%",
        borderColor: "brown",
        borderWidth: 1,
    },

    // Session de botões de view da tabela
    SessionButtonsTable: {
        width: "100%",
        borderColor: "yellow",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },

    ButtonsOnline: {
        height: 40,
        width: 110,
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

