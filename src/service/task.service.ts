import { amqp } from 'amqplib/callback_api'
import { Service } from 'typedi'

const CONN_URL = 'amqp://guest:guest@localhost:5672/'

@Service()
export class TaskService {
  constructor() {
    amqp.connect(CONN_URL, function (err, conn) {
      conn.createChannel(function (err, ch) {
        ch.consume(
          'work',
          function (msg) {
            console.log('.....')
            setTimeout(function () {
              console.log('Message:', msg.content.toString())
            }, 4000)
          },
          { noAck: true }
        )
      })
    })
  }
}
