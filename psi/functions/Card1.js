import React from "react"
import axios from "axios"

const DadosCard = {}

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

console.warn(Object.keys(DadosCard))