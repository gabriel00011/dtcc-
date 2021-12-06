import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: "green",
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },

    // Session de centralização
    SessionCenter: {
        flex: 1,
        width: "80%",
        // borderWidth: 1,
        // borderColor: "black",
        backgroundColor: "#FFFFFF"
    },

    // Session de search e foto
    SessionPhotoeSearch: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        // borderColor: "red",
        // borderWidth: 1,
        marginTop: 30
    },

    Photo: {
        height: 70,
        width: 70,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6495ED"
    },


    SessionDadosPsi: {
        marginTop: 50,
        height: 100,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        // borderColor: "pink",
        // borderWidth: 1
    },

    // Session de grupo
    SessionGroup: {
        // width: 320,
        height: 150,
        // borderColor: "black",
        // borderWidth: 1,
        // marginBottom: 30,
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

    // Session de Botões online e presencial
    SessionButtonsTipo: {
        width: "100%",
        // borderColor: "yellow",
        // borderWidth: 2,
        flexDirection: "row",
        // marginTop: "5%",
        justifyContent: "space-between"
    },

    ButtonsOnline: {
        height: 40,
        width: "30%",
        borderColor: "#6A5ACD",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    ButtonsPresencial: {
        height: 40,
        width: 150,
        borderColor: "#6A5ACD",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        // marginLeft: "10%"
    },

    // Session de agendamento de horas
    SessionHorasAgendamento: {
        height: 200,
        width: "100%",
        borderColor: "blue",
        borderWidth: 1,
        marginTop: "5%",
    },

    SessionCenterButtonAgendar: {
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%"
    },

    ButtonsAplicar: {
        height: 40,
        width: 150,
        borderColor: "#6A5ACD",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#6A5ACD"
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
    orderHous: {
        flex: 1,
        // borderColor: "blue",
        // borderWidth: 1,
        width: 45,
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center"
    },
    orderWekeendHours: {
        width: "100%",
        height: 34,
        flexDirection: "row",
        justifyContent: "space-around",
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