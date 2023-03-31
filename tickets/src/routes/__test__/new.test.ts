import { it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../../app';

it('has a route handler listening to /api/tickets/ for post requests', async () => {
  const response = await request(app).post('/api/tickets/new').send({});
  expect(response.status).not.toBe(404);
});

it('can only be accessed if the user is logged in', async () => {
  return request(app).post('/api/tickets/new').send({}).expect(401);
});

it('returns a status other than 401 if the user is logged in', async () => {
  const response = await request(app)
    .post('/api/tickets/new')
    .set('Cookie', global.signin())
    .send({});

  expect(response.status).not.toBe(401);
});

it('returns an error if invalid title is provided ', async () => {});

it('returns an error if invalid price is provided ', async () => {});

it('creates a tickets for valid inputs ', async () => {});