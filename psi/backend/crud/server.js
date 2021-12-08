const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const { con } = require("./source/mysql")

// querys de psicologo
const { psicologo } = require("./psicologo/cadastrodados")
const { sessionPsicologo } = require("./psicologo/getSession")
const { updatePsicologo } = require("./psicologo/update")
const { searchPsicologo } = require("./paciente/searchPsicologo")
const { signInHours } = require("./psicologo/signInHours")
const { deleteHours } = require("./psicologo/deleteHours")
const { updateHours } = require("./psicologo/updateHours")
const { agendaPsi } = require("./psicologo/agendapsi")
const { showAgendaPsi } = require("./psicologo/showAgendsPsi")
const { InsertPublicEspecial } = require("./psicologo/public&Especi")
const { deleteSession } = require("./psicologo/deleteSession")

// querys de paciente
const { paciente } = require("./paciente/cadastrodados")
const { updatePaciente } = require("./paciente/update")
const { getDadosPaciente } = require("./paciente/getDadosPaciente")
const { consultasAgends } = require("./paciente/consultasAgends")

// // pipeline
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

var port = process.env.PORT || 8080


// // Crud de Psicologo

app.post("/dadospsicologo", psicologo)

app.get("/getDadosPsicologo/:email", sessionPsicologo)

app.put("/updatePsicologo/:oldHour/:newHour/:idPsi/:dayWeekend", updateHours)

app.post("/signInHours", signInHours)

app.delete("/deleteHours/:Hour/:IdPsi/:dayWeekend", deleteHours)

app.post("/agendaPsi", agendaPsi)

app.post("/showAgenda", showAgendaPsi)

app.post("/signAtuacao", InsertPublicEspecial)


// // Crud de Paciente
app.post("/dadospaciente", paciente)

app.get("/dadosPaciente/:email", getDadosPaciente)

app.post("/consultasAgends", consultasAgends)

// // pesquisa psicologo
app.post("/searchPsicologo", searchPsicologo)


app.listen(port, () => {
    console.log("execute>>>>")
})
