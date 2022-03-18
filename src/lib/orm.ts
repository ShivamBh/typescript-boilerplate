import { Model } from 'objection'
import type { Knex } from 'knex'
import knex from '../../knex'
const db: Knex = knex

Model.knex(db)

class BaseModel extends Model {
  [x: string]: any

  $beforeUpdate() {
    this.updated_at = new Date().toISOString()
    // console.log('Time', db.fn.now(6))
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString()
    this.updated_at = new Date().toISOString()
  }
}

export { BaseModel, db }
