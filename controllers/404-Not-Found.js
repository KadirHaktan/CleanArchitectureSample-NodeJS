const {headers} = require('../config/config')


async function NotFoundController() {
    return {
        headers,
        body: {error: 'Not found'},
        statusCode: 404
    }
}


module.exports = NotFoundController