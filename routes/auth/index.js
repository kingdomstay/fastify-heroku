'use strict'
const FormData = require('form-data')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    console.log(request.body)
    const bodyFormData = new FormData();
    bodyFormData.append('ulogin', request.body.login);
    bodyFormData.append('upassword', request.body.password);
    const res = await fastify.axios.post(`https://e.mospolytech.ru/old/lk_api.php/`, bodyFormData, {
      headers: bodyFormData.getHeaders()
    })
    console.log(res)
    return res.data;
  })
}
