const environment = process.env.ENVIRONMENT || 'development'
import knex from 'knex'
import config from '../knexfile'

export default knex(config[environment])
