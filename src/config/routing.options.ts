import { RoutingControllersOptions } from 'routing-controllers'
import * as controllers from '@controller/index'
import * as middlewares from './routing.middleware'
import * as interceptors from './interceptors'
import { dictToArray } from './utils'

export const routingConfigs: RoutingControllersOptions = {
  controllers: dictToArray(controllers),

  middlewares: dictToArray(middlewares),

  interceptors: dictToArray(interceptors),

  // router prefix
  // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
  routePrefix: '/apis',

  // auto validate entity item
  // learn more: https://github.com/typestack/class-validator
  validation: true,
}
