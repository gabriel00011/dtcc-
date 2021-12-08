import { api } from "../source_config/axios"

export const DadosPaciente = {}

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

        api.post('/dadospaciente', {

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
