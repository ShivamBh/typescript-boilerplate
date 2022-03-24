import TestConsole from '@lib/test'
import { Users } from '@model/user'
import { Server } from 'http'
import { print } from '@configs/utils'
import CONSTANTS from '@configs/constants'
import createServer from '@configs/application'
import { bootstrapAfter } from '@configs/bootstrap'

// var amqp = require('amqplib/callback_api')
// const CONN_URL = 'amqp://guest:guest@localhost:5672/'
// amqp.connect(CONN_URL, function (err, conn) {
//   conn.createChannel(function (err, ch) {
//     ch.consume(
//       'user-messages',
//       function (msg) {
//         console.log('.....')
//         setTimeout(function () {
//           console.log('Message:', msg.content.toString())
//         }, 4000)
//       },
//       { noAck: true }
//     )
//   })
// })

module.exports = (async (): Promise<Server> => {
  try {
    const app = await createServer()
    return app.listen(CONSTANTS.PORT, () => {
      print.log(
        `server listening on ${CONSTANTS.PORT}, in ${CONSTANTS.ENV_LABEL} mode.`
      )
      bootstrapAfter()
    })
  } catch (e) {
    console.log(e)
  }
})()

// const app = await createServer()
// return app.listen(CONSTANTS.PORT, () => {
//   print.log(
//     `server listening on ${CONSTANTS.PORT}, in ${CONSTANTS.ENV_LABEL} mode.`
//   )
//   bootstrapAfter()
// })
