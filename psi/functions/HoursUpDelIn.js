import React from "react"
import axios from "axios"

import { lista } from "../PerfilPsi/TelaPerfilPsi1"

export async function InsertHours(id, weekDay, hours) {

    axios.post("http://192.168.15.223:80/signInHours", {
        idPsi: id,
        dataWeekend: weekDay,
        hours: hours
    })

}
export async function updateHours(hours1, hours2, Id_psicologo, selectUpdate) {
    axios.put(`http://192.168.15.223:80/updatePsicologo/${hours1}/${hours2}/${Id_psicologo}/${selectUpdate}`)
}

export async function DeleteHours(id, weekDay, hours) {
    axios.delete(`http://192.168.15.223:80/deleteHours/${hours}/${id}/${weekDay}`)
}

export async function addPublic(publi, especial, idPsi) {

    try {
        axios.post("http://192.168.15.223/signAtuacao", {
            publi: publi,
            especial: especial,
            idPsi: idPsi
        })
    } catch (e) {

    }

}

export async function delteSession(id_session) {
    axios.post("http://192.168.15.223/deleteSession", {
        id_agenda: id_session
    })
}