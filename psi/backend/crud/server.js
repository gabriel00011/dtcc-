const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")


// importação da funções da papeline, dos manipuladores de rota
const { psicologo } = require("./psicologo/cadastrodados")
const { sessionPsicologo } = require("./psicologo/getSession")
const { updatePsicologo } = require("./psicologo/update")
const { searchPsicologo } = require("./paciente/searchPsicologo")
const { signInHours } = require("./psicologo/signInHours")
const { getHours } = require("./psicologo/getHours")
const { deleteHours } = require("./psicologo/deleteHours")
const { updateHours } = require("./psicologo/updateHours")
const { agendaPsi } = require("./psicologo/agendapsi")
const { showAgendaPsi } = require("./psicologo/showAgendsPsi")
const { paciente } = require("./paciente/cadastrodados")
const { updatePaciente } = require("./paciente/update")
const { getDadosPaciente } = require("./paciente/getDadosPaciente")

// // pipeline
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())


// // manipuladores de rota verbos http

// // Crud de Psicologo

app.post("/dadospsicologo", psicologo)

app.get("/getDadosPsicologo/:email", sessionPsicologo)

app.put("/updatePsicologo/:oldHour/:newHour/:idPsi/:dayWeekend", updateHours)

app.post("/signInHours", signInHours)

app.get("/getHours/:id", getHours)

app.delete("/deleteHours/:Hour/:IdPsi/:dayWeekend", deleteHours)

app.post("/agendaPsi", agendaPsi)

app.post("/showAgenda", showAgendaPsi)

// // Crud de Paciente
app.post("/dadospaciente", paciente)

app.put("/updatePaciente", updatePaciente)

app.get("/dadosPaciente/:params", getDadosPaciente)

// // pesquisa psicologo
app.post("/searchPsicologo", searchPsicologo)


app.listen(80, () => {
    console.log("execute>>>>")
})
