import React from "react"

import { StyleSheet } from "react-native"
import { PricingButton } from "react-native-elements/dist/pricing/PricingCard"

export const style = StyleSheet.create({
    // Elemento pai
    Main: {
        flex: 1,
        width: "100%",
        // borderColor: "green",
        // borderWidth: 2,
        alignItems: "center",
        backgroundColor:"#FFFFFF"
    },

    // centralziar View
    SessionCenter: {
        height: 2000,
        width: "90%",
        // borderColor: "black",
        // borderWidth: 2
        backgroundColor:"#FFFFFF"
    },

    // Session botões de Agenda e Conta
    SessionButtonAgenda: {
        marginTop: 35,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    SessionButtonAgendaB: {
        width: "70%",
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
        alignItems: "center",
        backgroundColor:"#6495ED",
        
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
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
        flexDirection: "column",
    },

    SessionGroup0: {
        // width: 320,
        // height: 110,
        // borderColor: "black",
        // borderWidth: 1,
        // marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
        flexDirection: "row",
    },


    centerSelect: {
        flexDirection: "column",
        justifyContent: "flex-end"
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
        flexDirection: "column",
        // justifyContent:"space-between",
        // flex: 1,
        height: 900,
        width: "100%",
        // borderColor: "brown",
        // borderWidth: 1,
    },

    // Session de botões de view da tabela
    SessionButtonsTable: {
        width: "100%",
        // borderColor: "yellow",
        // borderWidth: 1,
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
    OrdersDay: {
        height: 170,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "blue",
        marginBottom: 30
    },

    buttonUpdate: {
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    OrderButtons: {
        height: 50,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "blue",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 90
    },

    OrderUpdate: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // borderWidth: 1,
        // borderColor: "red",
        marginTop: 10,
        marginBottom: 30
    },

    FieldData: {
        height: 40,
        width: 80,
        borderColor: "#7B68EE",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35
    },

    buttonHour: {
        paddingLeft: 7,
        paddingBottom: 5,
        paddingRight: 7,
        paddingTop: 5,
        backgroundColor: "#7B68EE",
        borderRadius: 3

    },
    setHour: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // borderColor: "#7B68EE",
        // borderWidth: 1,
        width: "60%"
    },
    SameButton: {
        width: 200,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#7B68EE",
        borderRadius: 3,
        alignItems: "center",
        marginTop: 20
    },
    orderHous: {
        flex: 1,
        // borderColor: "blue",
        // borderWidth: 1,
        width: 45,
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center"
    },

    orderUpAndDelte: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    buttonUpAndDel: {
        width: 150,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#7B68EE",
        borderRadius: 3,
        alignItems: "center",
        marginTop: 20
    },

    buttonUp: {
        width: 150,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#7B68EE",
        borderRadius: 3,
        alignItems: "center",
        // marginTop: 20,
        marginBottom: 25
    },

    styleHour: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 25,
        width: 45,
        marginBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    }

})

