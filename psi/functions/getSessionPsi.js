import React, { useContext, useEffect, useState } from "react"

export const SessionDadosPsi = {}

import axios from "axios"

export function getDados(value) {
    SessionDadosPsi.email = value
}
