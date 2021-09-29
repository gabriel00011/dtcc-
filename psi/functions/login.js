import React from "react"

import axios from "axios"

const DadosLogin = {}


export const FuncLogin = (email, pass) => {
    DadosLogin.email = email
    DadosLogin.pass = pass
   
    // console.warn(DadosLogin.email, DadosLogin.senha)
}

export const Cadastrar = () => {

    try {

        axios.post("http://192.168.15.223/backend", {
            email: DadosLogin.email,
            pass: DadosLogin.pass
        })

    } catch (e) {

        throw e
    }

}
