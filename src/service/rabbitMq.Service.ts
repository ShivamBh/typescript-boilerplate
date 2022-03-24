import amqp from 'amqplib/callback_api'
import { Service } from 'typedi'

const CONN_URL = 'amqp://guest:guest@localhost:5672'

@Service()
export class RabbitMqService {
  constructor(public channel) {
    this.channel = channel
  }

  async publishToQueue(queueName, data) {
    return this.channel.sendToQueue(queueName, Buffer.from(data))
  }
}
