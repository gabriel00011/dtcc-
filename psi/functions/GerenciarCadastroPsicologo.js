import React from "react"

import axios from "axios"

const DadosPsicologo = {}

export const FuncDadosPsi1 = (email, pass, passconfirm) => {

    DadosPsicologo.email = email
    DadosPsicologo.pass = pass
    DadosPsicologo.passconfirm = passconfirm

    // console.warn(DadosPsicologo.email, DadosPsicologo.pass, DadosPsicologo.passconfirm)
}

// Função de confirmação de senha
export const ComfirmValuePassword = () => {

    if (DadosPsicologo.pass === DadosPsicologo.passconfirm) {

        return "OK"

    } else if (DadosPsicologo.pass != DadosPsicologo.passconfirm) {

        return "SENHA NÃO CONVERGEM"

    }

}

export const FuncDadosPsi2 = (nome, sobrenome, cpf, crp, telefone, celular, genero, sexo) => {

    DadosPsicologo.nome = nome
    DadosPsicologo.sobrenome = sobrenome
    DadosPsicologo.cpf = cpf
    DadosPsicologo.crp = crp
    DadosPsicologo.telefone = telefone
    DadosPsicologo.celular = celular
    DadosPsicologo.genero = genero
    DadosPsicologo.sexo = sexo

    // console.warn(DadosPsicologo.nome, DadosPsicologo.sobrenome, DadosPsicologo.cpf, DadosPsicologo.crp, DadosPsicologo.telefone, DadosPsicologo.celular, DadosPsicologo.genero, DadosPsicologo.sexo)
}

export const FuncDadosPsi3 = (cep, rua, numero, complemento, bairro, cidade, estado) => {
    DadosPsicologo.cep = cep
    DadosPsicologo.rua = rua
    DadosPsicologo.numero = numero
    DadosPsicologo.complemento = complemento
    DadosPsicologo.bairro = bairro
    DadosPsicologo.cidade = cidade
    DadosPsicologo.estado = estado

    // console.warn(DadosPsicologo.cep, DadosPsicologo.rua, DadosPsicologo.numero, DadosPsicologo.complemento, DadosPsicologo.bairro, DadosPsicologo.cidade, DadosPsicologo.estado)
}

export function UpdateDadosPsicologo() {

    try {

        axios.put('http://192.168.15.223/updatePsicologo', {

            email: DadosPsicologo.email,
            pass: DadosPsicologo.pass,
            passconfirm: DadosPsicologo.passconfirm,

            nome: DadosPsicologo.nome,
            sobrenome: DadosPsicologo.sobrenome,
            cpf: DadosPsicologo.cpf,
            crp: DadosPsicologo.crp,
            telefone: DadosPsicologo.telefone,
            celular: DadosPsicologo.celular,
            genero: DadosPsicologo.genero,
            sexo: DadosPsicologo.sexo,

            cep: DadosPsicologo.cep,
            rua: DadosPsicologo.rua,
            numero: DadosPsicologo.numero,
            complemento: DadosPsicologo.complemento,
            bairro: DadosPsicologo.bairro,
            cidade: DadosPsicologo.cidade,
            estado: DadosPsicologo.estado

        })

    } catch (e) {

        throw "não enviado" + e

    }

}