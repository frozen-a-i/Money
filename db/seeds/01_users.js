/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Some guy', email: 'test@test.com' },
    { id: 2, name: 'Some girl', email: 'test@gmail.com' },
    { id: 3, name: 'Somone Elsa', email: 'test@test.com' }
  ]);
};
