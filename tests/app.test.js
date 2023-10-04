const supertest = require('supertest');
const app = require('../app.js');
const request = supertest(app)

it ('Testing to see if supertest works', () => {
    expect(1).toBe(1)
});

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request.get("/");
        expect(response.statusCode).toBe(418);
        });
    });
