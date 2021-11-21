const { con } = require("../source/mysql")

module.exports = {
    sessionPsicologo: (req, res, next) => {

        // console.log("resultado de request", req.params.email)

        const get = "select * from tbl_psicologo where psi_st_email = (?)"
        const hoursSeg = "select * from tbl_segunda where psi_in_codigo = (?)"
        const hoursTer = "select * from tbl_terca where psi_in_codigo = (?)"
        const hoursQua = "select * from tbl_quarta where psi_in_codigo = (?)"
        const hoursQui = "select * from tbl_quinta where psi_in_codigo = (?)"
        const hoursSex = "select * from tbl_sexta where psi_in_codigo = (?)"

        con.query(get, [req.params.email], (err, resultado, fiels) => {

    
            const listItemIfy = JSON.stringify(resultado)
            const listItemParse = JSON.parse(listItemIfy)
            const Id_psicologo = listItemParse[0]?.psi_in_codigo
            console.log("id do psicologo" + Id_psicologo)

            con.query(hoursSeg, [Id_psicologo], (err, resultSeg) => {

                con.query(hoursTer, [Id_psicologo], (err, resultTer) => {

                    con.query(hoursQua, [Id_psicologo], (err, resultQua) => {

                        con.query(hoursQui, [Id_psicologo], (err, resultQui) => {

                            con.query(hoursSex, [Id_psicologo], (err, resultSex) => {
                                res.json({ resultado, resultSeg, resultTer, resultQua, resultQui, resultSex })

                                // console.log(resultado, resultSeg, resultTer, resultQua, resultQui, resultSex)
                            })

                        })
                    })

                })

            })

            // console.log(resultado)
            // console.log(err)
            // console.log(listItemParse)
        })

    }
}


