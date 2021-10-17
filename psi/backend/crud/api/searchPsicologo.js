module.exports = {
    searchPsicologo: (req, res, next) => {
        const { kms, idoso, casais, lgbtq, pcd, infantil, ansiedade, toc, burnout, tag, casamento, alcoolismo } = req.body
        console.log(kms, idoso, casais, lgbtq, pcd, infantil, ansiedade, toc, burnout, tag, casamento, alcoolismo)

        // console.log(req.query.idoso)

        res.json({ nome: idoso })
        // console.log(idoso)
    }
}