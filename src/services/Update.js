const Connection = require('../database/Connection')

module.exports = async(id, name, password) => {
    try {
        const query = `UPDATE ` +
            `items ` +
            `SET ` +
            `name = '${name}', ` +
            `qty = '${qty}', ` +
            `amount = '${amount}'`
        `WHERE ` +
        `id = ${id}`

        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}