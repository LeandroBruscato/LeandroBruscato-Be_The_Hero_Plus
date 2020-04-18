const request = require('supertest')
const App = require('../../src/app')
const Connection = require('../../src/database/Connection')

describe('ONG', () => {
  beforeEach(async () => {
    //await Connection.migrate.rollback()
    await Connection.migrate.latest()
  })

  afterAll(async () => {
    await Connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(App).post('/ongs').send({
      name: "APAD2",
      email: "contato@gmail.com",
      WhatsApp: "12345678901",
      city: "Rio do Sul",
      uf: "SC",
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
