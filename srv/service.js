const cds = require('@sap/cds')
const { SELECT } = require('@sap/cds/lib/ql/cds-ql')

module.exports = cds.service.impl(async function () {
    const { Clientes } = this.entities
    this.on('RequisicaoCadastro', async (req) => {
        const id = req?.data?.ID
        
        if (id === undefined || id === null) {
            return req.error(400, 'ID não informado')
        }

        const resultado = await SELECT.from(Clientes).where({ ID: id})
        return resulado
    })
})