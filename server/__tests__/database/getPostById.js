/* eslint-disable no-undef */
const { getPostById } = require('../../db/queries');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('get post by id', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });

  test('get post by id', () => {
    expect.assertions(1);
    const input = {
      id: 1,
    };
    return getPostById(input.id).then(data => {
      const {
        post: { id },
      } = data;
      expect(id).toBe(input.id);
    });
  });
});
