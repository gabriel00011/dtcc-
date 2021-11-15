import React from "react"

import { StyleSheet } from "react-native"

export const style = StyleSheet.create({

    Main: {
        flex: 1,
        width: "100%",
        // justifyContent: "center",
        // alignItems: "center",
    },

    Container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 40
    },

    CardText: {
        fontSize: 16,
        width: "100%",
        // height: 200,
    },

    Card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        marginHorizontal: "1%",
        width: "96%",
        borderRadius: 8,
        padding: "3%",
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },

    CardImage: {
       display: "flex",
        borderRadius: 50,
        marginBottom: 4,
        width: 80,
        height: 80,
        backgroundColor: "#ff3"
    }

})