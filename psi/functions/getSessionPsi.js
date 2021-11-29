import React, { useContext, useEffect, useState } from "react"

export const SessionDadosPsi = {}

import axios from "axios"

export function getDados(value) {
    SessionDadosPsi.email = value
}

export function session() {

        axios.get("http://192.168.15.223/getDadosPsicologo/" + SessionDadosPsi.email)
            .then(resp => resp.json())
            .then(resp => {
        
            })
            
}


