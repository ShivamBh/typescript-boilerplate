import { BaseModel, db } from '@lib/orm'

export class Users extends BaseModel {
  static get tableName() {
    return 'users'
  }
}
