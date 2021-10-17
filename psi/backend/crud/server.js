const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")


// importação da funções da papeline, dos manipuladores de rota
const { psicologo } = require("./psicologo/cadastrodados")
const { paciente } = require("./paciente/cadastrodados")
const { updatePaciente } = require("./paciente/update")
const { updatePsicologo } = require("./psicologo/update")
const { searchPsicologo } = require("./api/searchPsicologo")

// pipeline
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())


// manipuladores de rota verbos http

// Crud de Psicologo
app.post("/dadospsicologo", psicologo)

app.put("/updatePsicologo", updatePsicologo)

// Crud de Paciente
app.post("/dadospaciente", paciente)

app.put("/updatePaciente", updatePaciente)


// pesquisa psicologo
app.post("/searchPsicologo", searchPsicologo)


app.listen(80, () => {
    console.log("execute>>>>")
})