import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    Main: {
        flex: 1,
        width: "100%",
        borderColor: "green",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    SessionCenter: {
        flex: 1,
        width: "90%",
        borderColor: "black",
        borderWidth: 1
    },

    SessionIcons: {
        height: 60,
        width: "100%",
        borderColor: "blue",
        borderWidth: 1,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"
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
    }

})