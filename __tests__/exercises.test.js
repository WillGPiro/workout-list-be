require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an excercise via POST', () => {
    return request(app)
      .post('/api/v1/exercises')
      .send({
        name: 'Pull-ups',
        description: 'Using a pronated grip, grasp the pull bar with a wider than shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
        sets: 3,
        reps: 5,
        url: 'https://youtu.be/5oxviYmdHCY',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Pull-ups',
          description: 'Using a pronated grip, grasp the pull bar with a wider than shoulder width grip. Take a deep breath, squeeze your glutes and brace your abs. Depress the shoulder blades and then drive the elbows straight down to the floor while activating the lats. Pull your chin towards the bar until the lats are fully contracted, then slowly lower yourself back to the start position and repeat for the assigned number of repetitions.',
          sets: 3,
          reps: 5,
          url: 'https://youtu.be/5oxviYmdHCY',
          __v: 0
        });
      });
  });
});
