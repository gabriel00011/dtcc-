import React from "react"
const firebase = require("../functions/CadastroPsicologo")
import axios from "axios"

export const DadosLogin = {}

export const FuncLogin = (email, pass) => {
    DadosLogin.email = email
    DadosLogin.pass = pass
}

export const Cadastrar = () => {

    try {

        axios.post("http://192.168.15.223/backend", {
            email: DadosLogin.email,
            pass: DadosLogin.pass
        })

    } catch (e) {

        // throw e
    }

}
