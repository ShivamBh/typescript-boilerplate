import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
} from 'routing-controllers'
import { HelloService, RabbitMqService } from '@service/index'
import { Service } from 'typedi'

@JsonController()
@Service()
export class HelloController {
  constructor(
    private helloService: HelloService,
    private rabbitMqService: RabbitMqService
  ) {}

  @Get('/hello')
  async query() {
    return await this.rabbitMqService.channel
  }

  @Post('/work')
  async work(@BodyParam('data') data: object) {
    return await this.rabbitMqService.publishToQueue('work', data)
  }

  // @Post('/sessions')
  // async create(
  //   @BodyParam('username') name: string
  // ): Promise<Prisma.SessionGetPayload<any>> {
  //   if (!name) {
  //     throw new BadRequestError('username is required')
  //   }
  //   return await this.sessionsService.create({ name })
  // }
}
