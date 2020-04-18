const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/Connection');

module.exports = {

    //Get All ONGs
    async getAll(Request,Response)
    {
        const ongs = await connection('ongs').select('*');
        return Response.json(ongs);
    },
    //Add ONG
    async create(Request,Response)
    {
        const { name, login, password, email, WhatsApp, city, uf } = Request.body;
        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            login,
            password,
            email,
            WhatsApp,
            city,
            uf,
        })
        return Response.json({name});
    }
};
