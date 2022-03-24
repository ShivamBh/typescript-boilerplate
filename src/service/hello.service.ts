import { Service } from 'typedi'

@Service()
export class HelloService {
  /**
   * Type 'Prisma.SessionCreateInput' is automatically generated.
   * Whenever you modify file 'prisma/schema.prisma' and then run command:
   *   prisma generate
   *   prisma migrate dev
   * The types is automatically updated.
   *
   * About CRUD: https://www.prisma.io/docs/concepts/components/prisma-client/crud
   */
  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async hello() {
    await this.timeout(3000)
    return 'Hello yei'
  }
}
