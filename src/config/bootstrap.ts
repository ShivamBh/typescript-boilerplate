import { join } from 'path'
import { print } from './utils'
import dotenv from 'dotenv'
import { Container } from 'typedi'
import { RabbitMqService } from '@service/index'
import amqp from 'amqplib/callback_api'
import { BuildService } from '../service/build.service'

// "before" will trigger before the app lift.
export const bootstrapBefore = (): object => {
  // solve ncc path link.
  const result = dotenv.config({ path: join(__dirname, '../.env') })
  if (result.error) {
    print.danger('Environment variable not loaded: not found ".env" file.')
    return {}
  }
  print.log('.env loaded.')
  return result.parsed
}

// "after" will trigger after the "container" mounted..
export const bootstrapAfter = async (): Promise<any> => {
  const serviceInstance = Container.get(RabbitMqService)
  const buildInstance = Container.get(BuildService)
  const connection = await amqp.connect(
    process.env.RABBITMQ_URL || 'amqp://guest:guest@localhost:5672',
    function (err, conn) {
      conn.createChannel(function (err, channel) {
        serviceInstance.channel = channel

        channel.consume(
          'task',
          function (msg) {
            console.log('.....')
            setTimeout(function () {
              console.log('Message:', msg.content.toString())
            }, 4000)
          },
          { noAck: true }
        )
      })
    }
  )

  process.on('exit', (code) => {
    serviceInstance.channel.close()
    console.log(`Closing rabbitmq channel`)
  })

  console.log(buildInstance.buildProject()
}
