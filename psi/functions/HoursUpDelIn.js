import React from "react"
import { api } from "../source_config/axios"

export async function InsertHours(id, weekDay, hours) {

    try {
        const awaitValue = await api.post("/signInHours", {
            idPsi: id,
            dataWeekend: weekDay,
            hours: hours
        })
    }
    catch (e) {

    }

}
export async function updateHours(hours1, hours2, Id_psicologo, selectUpdate) {
    try {
        const awaitValue = await api.put(`/updatePsicologo/${hours1}/${hours2}/${Id_psicologo}/${selectUpdate}`)
    }
    catch (e) {
        console.log(e)
    }
}

export async function DeleteHours(id, weekDay, hours) {
    try {
        const awaitValue = await api.delete(`/deleteHours/${hours}/${id}/${weekDay}`)
    } catch (e) {
        console.log(e)
    }
}

export async function addPublic(publi, especial, idPsi) {

    try {
        const awaitValue = await api.post("/signAtuacao", {
            publi: publi,
            especial: especial,
            idPsi: idPsi
        })
    } catch (e) {
        console.log(e.message)
    }

}

export async function delteSession(id_session) {
    try {

        const awaitValue = await api.post("/deleteSession", {
            id_agenda: id_session
        })

    } catch (e) {
        console.log(e)
    }
}