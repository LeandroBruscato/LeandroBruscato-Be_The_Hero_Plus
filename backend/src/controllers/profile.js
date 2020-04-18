const connection = require('../database/Connection');

module.exports = {

    //Get All Incidents of ONG

    async getIncidents(Request,Response)
    {
        const ong_id = Request.headers.authorization;
        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
        return Response.json(incidents);
    }
};
