const mysql = require("mysql")


const con = mysql.createConnection({
    host: "localhost",
    database: "tcc",
    user: "root",
    password: "facil123"
})


module.exports = {
    paciente: (req, res, next) => {

        const {
            email, pass, passconfirm,
            nome, sobrenome, cpf,
            rg, data, telefone, celular,
            genero, sexo, cep,
            rua, numero, complemento,
            bairro, cidade, estado } = req.body

        console.log(email, pass, passconfirm,
            nome, sobrenome, cpf,
            rg, data, telefone, celular,
            genero, sexo, cep,
            rua, numero, complemento,
            bairro, cidade, estado)

        // mudando a data para inserção na tabela no banco de dados mysql
        const changeDatad = data.toString()
        const changea = changeDatad.split("")
        const thost = changea[6] + changea[7] + changea[8] + changea[9] + "-" + changea[3] + changea[4] + "-" + changea[0] + changea[1]


        con.connect(function (err) {

            const insertDadosPacientePessoais = 'insert into tbl_paciente(pa_in_codigo, pa_st_nome, pa_st_sobrenome, pa_dt_nascimento, pa_st_cpf, pa_st_rg, pa_st_email, pa_st_telefone, pa_st_celular, pa_st_senha, pa_en_sexo) values(?,?,?,?,?,?,?,?,?,?,?)'
            const insertDadosPacienteEndereco = 'insert into tbl_end_paciente(end_in_codigo, pa_in_codigo, end_st_uf, end_st_bairro, end_st_cidade, end_st_rua, end_st_complemento, end_st_numero, end_st_cep ) values (?,?,?,?,?,?,?,?,?)'

            // insert de dados pessoais 
            con.query(insertDadosPacientePessoais, [Math.random() * 11, nome, sobrenome, thost, cpf, rg, email, telefone, celular, pass, sexo], (err, result) => {
                console.log(result)
                console.log(err)
            })

            // insert de dados cadastro 
            con.query(insertDadosPacienteEndereco, [3, 10, estado, bairro, cidade, rua, complemento, numero, cep], (err, result) => {
                console.log(result)
                console.log(err)
            })


        });

    }
}







// console.log(email, pass, passconfirm,
//     nome, sobrenome, cpf,
//     rg, data, telefone, celular,
//     genero, sexo, cep,
//     rua, numero, complemento,
//     bairro, cidade, estado)