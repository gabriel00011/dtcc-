const { con } = require("../source/mysql")

module.exports = {

    getDadosPaciente: (req, res, next) => {

        const { email } = req.params

        const dadosPaciente = "select * from tbl_paciente"

        con.query(dadosPaciente, [email], (err, result) => {
            res.json(result)
        })
    }
}