const supertest = require('supertest')

it("GET /", async () => {
    await supertest('http://localhost:8000').get('/')
    .expect(200)
    .then(res => {
        console.log(res.body)
    })
})