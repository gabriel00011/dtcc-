import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Elemento Pai
    Main: {
        flex: 1,
        width: "100%",
        // borderColor: "green",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    SessionCenter: {
        flex: 1,
        width: "90%",
        // borderColor: "blue",
        // borderWidth: 1,
    },

    // Session Icon
    SeesionIcon: {
        // borderColor: "black",
        // borderWidth: 1,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    PhotoName: {
        width: 100,
        height: 90,
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-between",
    },

    Photo: {
        height: 60,
        width: 60,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6495ED"
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

    SessionModalidade: {
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 2,
        marginBottom: "10%"
    },

    // Session de Botões online e presencial
    SessionButtonsTipo: {
        width: "100%",
        // borderColor: "yellow",
        // borderWidth: 2,
        flexDirection: "row",
        marginTop: "5%",
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

    // Session de Selects
    SessionSelects: {
        height: 215,
        width: "100%",
        // borderColor: "green",
        // borderWidth: 1,
        flexDirection: "column",
        marginBottom: "2%"
    },

    SessionOrgSelects: {
        height: "100%",
        width: "100%",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
    },
    // Alinhamento de Radio button
    AlignSelects: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    RadioButton: {
        height: 170,
        width: 100,
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-around"
    },

    AlignRadioButton: {
        height: 110,
        // borderColor: "green",
        // borderWidth: 1,
        alignItems: "flex-start"
    },

    Checkbox: {
        height: "100%",
        width: 100,
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 35
    },

    AlignChecbox: {
        height: 150,
        // borderColor: "green",
        // borderWidth: 1,
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "space-around"
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


    // Session Especialidade
    SessionEspecialidade: {
        width: "100%",
        // borderColor: 'green',
        // borderWidth: 1,
        flexDirection: "row"
    },

    CheckboxEspecialidade1: {
        height: 100,
        // width: "40%",
        // borderColor: "blue",
        // borderWidth: 1,
        alignItems: "flex-start",
    },

    CheckboxEspecialidade2: {
        height: 100,
        // width: "50%",
        // borderColor: "red",
        // borderWidth: 1,
        alignItems: "flex-start",
        marginLeft: 40
    },

    SessionCenterButtonAplicar: {
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%"
    },

})