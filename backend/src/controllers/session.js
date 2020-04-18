const connection = require('../database/Connection');

module.exports = {
    async create(Request,Response)
    {
        const { login, password } =  Request.body;
        
        const ong = await connection('ongs').where('login', login)
        .where('password', password ).select('name').first();
        if(!ong)
        {
            return  Response.status(400).json({error: 'ong not found'});
        }
        return Response.json(ong);
    }
}
