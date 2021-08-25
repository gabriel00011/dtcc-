import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        width: "100%",
        // borderColor: "green",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    SessionCenter: {
        flex: 1,
        width: "80%",
        // borderColor: "black",
        // borderWidth: 1
    },

    SessionIcons: {
        height: 60,
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "5%"
    },

    SessionButtonsSearch: {
        width: "35%",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    SessionButtonsExit: {
        width: "35%",
        // borderColor: "red",
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between"
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
        marginBottom: "15%"
    },

    SessionOrgSelects: {
        height: 150,
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
        height: "100%",
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
        height: 110,
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

    SessionCenterButtonAplicar: {
        width: "100%",
        // borderColor: "blue",
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%"
    },

    // SessionMapa
    SessionMapa: {
        height: 250,
        width: "100%",
        borderWidth: 1,
        borderColor: "blue"
    }
})