import React from "react"
import axios from "axios"

export const DadosCard = {}

export const FuncDadosCard = (infantil, idoso, casais, todos, lgbtq, pcd, ansiedade, toc, burnout, tag, casamento, alcoolismo) => {

    DadosCard.infantil = infantil
    DadosCard.idoso = idoso
    DadosCard.casais = casais
    DadosCard.todos = todos
    DadosCard.lgbtq = lgbtq
    DadosCard.pcd = pcd

    DadosCard.ansiedade = ansiedade
    DadosCard.toc = toc
    DadosCard.burnout = burnout
    DadosCard.tag = tag
    DadosCard.casamento = casamento
    DadosCard.alcoolismo = alcoolismo
    
}


export function sendSearch() {


    axios.post(`http://192.168.15.223/searchPsicologo`, {

        infantil: DadosCard.infantil,
        idoso: DadosCard.idoso,
        casais: DadosCard.casais,
        todos: DadosCard.todos,
        lgbtq: DadosCard.lgbtq,
        pcd: DadosCard.pcd,

        ansiedade: DadosCard.ansiedade,
        toc: DadosCard.toc,
        burnout: DadosCard.burnout,
        tag: DadosCard.tag,
        casamento: DadosCard.casamento,
        alcoolismo: DadosCard.alcoolismo

    })


}
