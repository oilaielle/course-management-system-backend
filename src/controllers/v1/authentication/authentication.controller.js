import { HttpMethod, route } from '@spksoft/koa-decorator'
import login from '../../../domains/authentication/login'

@route('/v1/authentication')
class Authentication {
  @route('/login', HttpMethod.POST)
  async login(ctx) {
    const { body } = ctx.request
    const resp = await login(body)
    ctx.res.ok({ data: resp })
  }
}

export default Authentication
