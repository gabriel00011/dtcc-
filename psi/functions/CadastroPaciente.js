import React from "react"
import axios from "axios"
export const firebase = require('firebase')

export const DadosPaciente = {}

// export function send() {
//     const firebaseConfiga = {
//         apiKey: "AIzaSyACneTH-9jieXJTWiMRZ7tkL0E-Fq-1IcU",
//         authDomain: "loginpaciente-4671e.firebaseapp.com",
//         projectId: "loginpaciente-4671e",
//         storageBucket: "loginpaciente-4671e.appspot.com",
//         messagingSenderId: "412155378549",
//         appId: "1:412155378549:web:83b3aef86f6ec174d8313c"
//     };


//     const app = firebase.initializeApp(firebaseConfiga)

//     firebase.auth().createUserWithEmailAndPassword(DadosPaciente.email, DadosPaciente.pass)
//         .then(() => {
//             // nav()
//             console.warn("sucesso")
//         }).catch((err) => {
//             console.warn(err)
//         })
// }



export const FuncDadosPac1 = (email, pass, passconfirm) => {

    DadosPaciente.email = email
    DadosPaciente.pass = pass
    DadosPaciente.passconfirm = passconfirm

}


// Função de confirmação de senha
export const ComfirmValuePassword = () => {

    if (DadosPaciente.pass === DadosPaciente.passconfirm) {

        return "OK"

    } else if (DadosPaciente.pass != DadosPaciente.passconfirm) {

        return "SENHA NÃO CONVERGEM"

    }

}



export const FuncDadosPac2 = (nome, sobrenome, cpf, data, rg, telefone, celular, genero, sexo) => {
    DadosPaciente.nome = nome
    DadosPaciente.sobrenome = sobrenome
    DadosPaciente.cpf = cpf
    DadosPaciente.rg = rg
    DadosPaciente.data = data
    DadosPaciente.telefone = telefone
    DadosPaciente.celular = celular
    DadosPaciente.genero = genero
    DadosPaciente.sexo = sexo


}

export const FuncDadosPac3 = (cep, rua, numero, complemento, bairro, cidade, estado) => {
    DadosPaciente.cep = cep
    DadosPaciente.rua = rua
    DadosPaciente.numero = numero
    DadosPaciente.complemento = complemento
    DadosPaciente.bairro = bairro
    DadosPaciente.cidade = cidade
    DadosPaciente.estado = estado


}



export const Cadastrar = () => {
    try {

        axios.post('http://192.168.15.223/dadospaciente', {

            email: DadosPaciente.email,
            pass: DadosPaciente.pass,
            passconfirm: DadosPaciente.passconfirm,

            nome: DadosPaciente.nome,
            sobrenome: DadosPaciente.sobrenome,
            cpf: DadosPaciente.cpf,
            rg: DadosPaciente.rg,
            data: DadosPaciente.data,
            telefone: DadosPaciente.telefone,
            celular: DadosPaciente.celular,
            genero: DadosPaciente.genero,
            sexo: DadosPaciente.sexo,

            cep: DadosPaciente.cep,
            rua: DadosPaciente.rua,
            numero: DadosPaciente.numero,
            complemento: DadosPaciente.complemento,
            bairro: DadosPaciente.bairro,
            cidade: DadosPaciente.cidade,
            estado: DadosPaciente.estado

        })

    } catch (e) {

        throw "não enviado" + e

    }
}
