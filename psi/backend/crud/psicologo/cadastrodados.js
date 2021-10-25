const msql = require("mysql")

const con = msql.createConnection({
    host: "localhost",
    user: "root",
    password: "facil123",
    database: "tcc"
})

module.exports = {
    psicologo: (req, res, next) => {

        const {
            email, pass, passconfirm,
            nome, sobrenome, cpf, crp,
            rg, telefone, celular,
            genero, sexo, cep,
            rua, numero, complemento,
            bairro, cidade, estado } = req.body


        console.log(email, pass, passconfirm,
            nome, sobrenome, cpf,
            rg, telefone, celular,
            genero, sexo, cep,
            rua, numero, complemento,
            bairro, cidade, estado)


        const insertDadosPsicologoPessoais = "insert into tbl_psicologo(psi_in_codigo, psi_st_nome, psi_st_sobrenome, psi_st_cpf, psi_st_crp, psi_st_email, psi_st_telefone, psi_st_celular, psi_st_senha, psi_en_sexo) values(?,?,?,?,?,?,?,?,?,?)"
        const insertDadosPsicologoEndereco = "insert into tbl_end_psicologo(end_in_codigo, psi_in_codigo, end_st_cidade, end_st_bairro, end_st_rua, end_st_numero, end_st_complemento, end_st_cep, end_st_uf) values(?,?,?,?,?,?,?,?,?)"

        // con.query(insertDadosPsicologoPessoais, [Math.random() * 11, nome, sobrenome, cpf, crp, email, telefone, celular, pass, sexo], (err, result) => {
        //     console.log(err)
        //     console.log(result)
        // })

        con.query(insertDadosPsicologoEndereco, [Math.ceil(Math.random() * 11), 6, cidade, bairro, rua, numero, complemento, cep, estado], (err, result) => {
            console.log(err)
            console.log(result)
        })

    }
}



// console.log(email, pass, passconfirm,
//     nome, sobrenome, cpf,
//     rg, telefone, celular,
//     genero, sexo, cep,
//     rua, numero, complemento,
//     bairro, cidade, estado)