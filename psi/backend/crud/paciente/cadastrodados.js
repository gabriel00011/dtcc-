const { con } = require("../source/mysql")

module.exports = {
    paciente: (req, res, next) => {

        const {
            email, pass, passconfirm, nome, sobrenome, cpf,
            rg, data, telefone, celular, genero, sexo, cep,
            rua, numero, complemento, bairro, cidade, estado } = req.body


        // mudando a data para inserção na tabela no banco de dados mysql

        con.connect(function (err) {

            const insertDadosPacientePessoais = 'insert into tbl_paciente( pa_st_nome, pa_st_sobrenome, pa_dt_nascimento, pa_st_cpf, pa_st_rg, pa_st_email, pa_st_telefone, pa_st_celular, pa_st_senha, pa_en_genero) values(?,?,?,?,?,?,?,?,?,?)'
            const insertDadosPacienteEndereco = 'insert into tbl_end_paciente( pa_in_codigo, end_st_uf, end_st_bairro, end_st_cidade, end_st_rua, end_st_complemento, end_st_numero, end_st_cep ) values (?,?,?,?,?,?,?,?)'
            const Id_paciente = "select max(pa_in_codigo) from tbl_paciente"

            // insert de dados pessoais 
            con.query(insertDadosPacientePessoais, [nome, sobrenome, data, cpf, rg, email, telefone, celular, pass, sexo], (err, result) => {

                con.query(Id_paciente, (err, result, fields) => {
                    let resultado = JSON.stringify(result)
                    let result1 = JSON.parse(resultado)
                    let Id_paciente = result1[0]["max(pa_in_codigo)"]

                    // insert de dados cadastro 
                    con.query(insertDadosPacienteEndereco, [Id_paciente, estado, bairro, cidade, rua, complemento, numero, cep], (err, result) => {
                        console.log(result)
                        console.log(err)
                    })

                })

                console.log(result)
                console.log(err)

            })

        });

    }
}
