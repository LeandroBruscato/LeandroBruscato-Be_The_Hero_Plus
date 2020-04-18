const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/ong');
const incidentController = require('./controllers/incidents');
const profileController = require('./controllers/profile');
const sessionController = require('./controllers/session');


const routes = express.Router();


routes.get('/ongs', ongController.getAll);
routes.post(
    '/ongs',
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        login: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
        WhatsApp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    }),   ongController.create );

routes.get(
    '/profile',
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
      }).unknown(),
    }),
    profileController.getIncidents
  )


routes.post('/sessions', sessionController.create);


routes.get(
    '/incidents',
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    }),
    incidentController.getAll
  )



routes.post('/incidents', incidentController.create);

routes.delete(
    '/incidents/:id',
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    }),
    incidentController.delete
  )

module.exports = routes;