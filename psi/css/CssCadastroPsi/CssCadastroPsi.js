import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        borderWidth: 1,
        // borderColor: "green",
        // justifyContent: "center",
        alignItems: "center"
    },

    // Alinhamento para elemento pai
    MainChildren: {
        height: "95%",
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
        marginTop: 60,
        // borderColor: "yellow",
        // borderWidth: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },

    // Session de Navegações
    ViewNavigation: {
        flex: 1,
        width: "100%",
        // borderColor: "black",
        // borderWidth: 2,
        flexDirection: "column",
        justifyContent: "space-between"
    },


})

// Todos as telas terão comentado as bordas para rascunho 
// Não retirar para futuras modificações 