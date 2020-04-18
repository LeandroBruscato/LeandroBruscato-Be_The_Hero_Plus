const connection = require('../database/Connection');
module.exports = {

    //Get All incidents
    async getAll(Request,Response)
    {
        const  quantity = 5;
        const {page = 1} = Request.query; 
		console.log("page:");
		console.log(page);
        const [count] = await connection('incidents').count();
        console.log(count);
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=','incidents.ong_id')
        .limit(quantity)
        .offset((page - 1 ) * quantity)
        .select(
            ['incidents.*',
            'ongs.name',
            'ongs.whatsApp',
            'ongs.city',
            'ongs.uf'
    ])
    
        Response.header('X-Total-Count', count['count(*)'])

        return Response.json(incidents)
    },
     //Add incidents
     async create(Request,Response)
     {
         const { title, description, value } = Request.body;
         const ong_id = Request.headers.authorization;
         const [id]  = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
         })
         return Response.json({id});
     },
      //remove incidents
     async delete(Request,Response)
     {
         const { id } = Request.params;
         const ong_id = Request.headers.authorization;
         
         const incidents = await connection('incidents').where('id', id).select('ong_id').first();

         if (incidents.ong_id != ong_id)
         {
            return Response.status(401).json( {error: 'operation not permitted.'});
         }

         await connection('incidents').where('id', id).delete();

         return Response.status(204).send();
        
     }

};