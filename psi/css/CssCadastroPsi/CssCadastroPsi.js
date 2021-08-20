import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        width: "100%",
        // borderWidth: 1,
        // borderColor: "green",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },

    // Alinhamento para elemento pai
    MainChildren: {
        flex: 1,
        width: "90%",
        // borderColor: "blue",
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },

    // Session de Botões de navegação - Filho
    ButtonNavigation: {
        height: 50,
        width: "100%",
        marginTop: 30,
        // borderColor: "yellow",
        // borderWidth: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },

    // Session de Navegações
    ViewNavigation: {
        height: 590,
        width: "100%",
        // borderColor: "black",
        // borderWidth: 2,
        flexDirection: "column",
        justifyContent: "space-between"
    },


})

// Todos as telas terão comentado as bordas para rascunho 
// Não retirar para futuras modificações 