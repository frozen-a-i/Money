/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('wallet').del()
    .then(function () {
      return knex('wallet').insert([
        { id: 1, balance: 1200, user_id: 3 },
        { id: 2, balance: 1300, user_id: 3 },
        { id: 3, balance: 1300, user_id: 3 },
        { id: 4, balance: 1300, user_id: 3 },
      ]);
    });
}