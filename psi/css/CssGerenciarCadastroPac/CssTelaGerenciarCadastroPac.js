import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    // Session principal - pai
    Main: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    // Session centralizador ao elemento pai
    SessionCenter: {
        flex: 1,
        width: "90%",
        // borderWidth: 1,
        // borderColor: "green",
        flexDirection: "column",
        justifyContent: "center",
    },


    // Botões de perfil e agenda
    ButtonBack: {
        height: 40,
        width: 120,
        // borderWidth: 2,
        // borderColor: "#7B68EE",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    },


    // Session de foto e conta
    SessionPhoto: {
        height: 100,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    // Photo
    Photo: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    // Session de Navegação
    SessionNavegation: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: "blue",
    },
    Inputs: {
        height: 40,
        width: "100%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 5
    },

    // Session duplo elementos
    SessionDubleInputs: {
        width: "100%",
        // borderWidth: 1,
        // borderColor: "blue",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    // Fragmento Inputs
    FragmentInputsNumber: {
        height: 40,
        width: "39%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 5
    },

    FragmentInputsComp: {
        height: 40,
        width: "60%",
        borderColor: "#A9A9A9",
        borderWidth: 2,
        borderRadius: 4,
        marginBottom: 5
    },

    // SessionButtons
    SessionButtonFooter: {
        height: 350,
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "blue",
    },


    SessionButtonFooterDuble: {
        height: 35,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth: 1,
        // borderColor: "blue",
    },

    // Botões
    ButtonSave: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: "#7B68EE",
        backgroundColor: "#7B68EE",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },

    ButtonExit: {
        height: 40,
        width: 100,
        borderWidth: 1,
        borderColor: "#CD5C5C",
        backgroundColor: "#CD5C5C",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    ButtonDelete: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: "#CD5C5C",
        backgroundColor: "#CD5C5C",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})