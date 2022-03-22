import { BaseModel } from '@lib/orm'

interface IUser {
  id?: string
  name: string
  site_name: string
  theme: string
  logo: string
}

type UserModel = IUser

export class Users extends BaseModel {
  id?: string
  name: string
  site_name: string
  theme: string
  logo: string

  static get tableName() {
    return 'users'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'site_name', 'theme', 'logo'],

      // Properties defined as objects or arrays are
      // automatically converted to JSON strings when
      // writing to database and back to objects and arrays
      // when reading from database. To override this
      // behaviour, you can override the
      // User.jsonAttributes property.

      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        site_name: { type: 'string' },
        logo: { type: 'string' },
        theme: { type: 'string' },
        created_at: { type: ['integer'] },
        updated_at: { type: ['integer'] },
      },
    }
  }
}
