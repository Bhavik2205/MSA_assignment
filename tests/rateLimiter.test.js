const request = require('supertest');
const app = require('../app');

describe('Rate Limiting Middleware', () => {
    test('Should allow requests within the limit', async () => {
        const response = await request(app).get('/search/pizza?lat=28.6139&lon=77.2090');
        expect(response.status).toBe(200); 
    });

    test('Should block requests exceeding the limit', async () => {
        jest.setTimeout(20000);
        for (let i = 0; i < 101; i++) {
            await request(app).get('/search/pizza?lat=28.6139&lon=77.2090');
        }
        const blockedResponse = await request(app).get('/search/pizza?lat=28.6139&lon=77.2090');
        expect(blockedResponse.status).toBe(429);
    }, 20000);
});
