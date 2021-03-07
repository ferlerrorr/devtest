const Connection = require('../database/Connection')

module.exports = async(name, qty, amount) => {
    try {
        const query = `INSERT INTO ` +
            `items ` +
            `VALUES ` +
            `(null, '${name}', '${qty}', '${amount}')`

        await Connection(query)

        return true
    } catch (err) {
        return false
    }
}