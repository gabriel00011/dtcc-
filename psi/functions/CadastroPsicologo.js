export const firebase = require('firebase')
import { api } from "../source_config/axios"

let firebaseConfiga = {
    apiKey: "AIzaSyACneTH-9jieXJTWiMRZ7tkL0E-Fq-1IcU",
    authDomain: "loginpaciente-4671e.firebaseapp.com",
    projectId: "loginpaciente-4671e",
    storageBucket: "loginpaciente-4671e.appspot.com",
    messagingSenderId: "412155378549",
    appId: "1:412155378549:web:83b3aef86f6ec174d8313c"
};


// const app = firebase.initializeApp(firebaseConfiga)

if (firebase.apps.length === 0) {

    firebase.initializeApp(firebaseConfiga);

}

export const DadosPsicologo = {}

export const FuncDadosPsi1 = (email, pass, passconfirm) => {

    DadosPsicologo.email = email
    DadosPsicologo.pass = pass
    DadosPsicologo.passconfirm = passconfirm


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

}

export const FuncDadosPsi3 = (cep, rua, numero, complemento, bairro, cidade, estado) => {
    DadosPsicologo.cep = cep
    DadosPsicologo.rua = rua
    DadosPsicologo.numero = numero
    DadosPsicologo.complemento = complemento
    DadosPsicologo.bairro = bairro
    DadosPsicologo.cidade = cidade
    DadosPsicologo.estado = estado

}

export function Cadastrar() {

    try {

        api.post('/dadospsicologo', {

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