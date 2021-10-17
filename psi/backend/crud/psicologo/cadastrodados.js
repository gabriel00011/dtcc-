module.exports = {
    psicologo: (req, res, next) => {
        
        const {
            email, pass, passconfirm,
            nome, sobrenome, cpf,
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

    }
}