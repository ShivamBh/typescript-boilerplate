import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(function () {
      // set up tables
      return knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
          return knex.schema.createTable('users', function (table) {
            table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
            table.string('name').notNullable()
            table.string('site_name').notNullable()
            table.string('theme').notNullable()
            table.string('logo').notNullable()
            table
              .timestamp('created_at', { useTz: true })
              .defaultTo(knex.fn.now())
            table
              .timestamp('updated_at', { useTz: true })
              .defaultTo(knex.fn.now())
          })
        }
      })
    })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users')
}
