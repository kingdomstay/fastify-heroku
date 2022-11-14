'use strict'

module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
        const res = await fastify.axios.post(`https://e.mospolytech.ru/old/lk_api.php/?getUser&token=${request.body.token}`);
        return res.data;
    })
}
