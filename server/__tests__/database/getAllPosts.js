const allPosts = require('../../db/queries/getAllPosts');
const initDatabase = require('../../db/config/build');
const connection = require('../../db/config/connection');

describe('test getAllPosts query', () => {
  beforeAll(() => {
    return initDatabase();
  });
  afterAll(() => {
    return connection.end();
  });

  test('test get All posts function', () => {
    expect.assertions(2);
    return allPosts().then(({ rows }) => {
      console.log(rows);
      expect(rows).toBeDefined();
      expect(rows[0]).toBeDefined();
    });
  });
});
