import { HttpMethod, route } from '@spksoft/koa-decorator'
import createUser from '../../../domains/user/create'
import getByUser from '../../../domains/user/view'
import updateUserProfile from '../../../domains/user/update'
import deleteUser from '../../../domains/user/delete'
import listUser from '../../../domains/user/list'
import { builder } from '../../../models/user.repository'
import { findDistinct } from '../../../utils/domain'

@route('/v1/users')
class Users {
  @route('/', HttpMethod.GET)
  async listUser(ctx) {
    const { search, ...options } = ctx.query
    const resp = await listUser(search, options)
    ctx.res.ok({ data: resp })
  }

  @route('/', HttpMethod.POST)
  async createUser(ctx) {
    const { body } = ctx.request
    const resp = await createUser(body)
    ctx.res.ok({ data: resp })
  }

  @route('/:usernameOrEmailOrPhone', HttpMethod.PUT)
  async updateUserProfile(ctx) {
    const { usernameOrEmailOrPhone } = ctx.params
    const { body } = ctx.request
    const resp = await updateUserProfile(usernameOrEmailOrPhone, body)
    ctx.res.ok({ data: resp })
  }

  @route('/:usernameOrEmailOrPhone', HttpMethod.GET)
  async getUser(ctx) {
    const { usernameOrEmailOrPhone } = ctx.params
    const resp = await getByUser(usernameOrEmailOrPhone)
    ctx.res.ok({ data: resp })
  }

  @route('/:username', HttpMethod.DELETE)
  async deleteUser(ctx) {
    const { username } = ctx.params
    const resp = await deleteUser(username)
    ctx.res.ok({ data: resp })
  }

  @route('/distinct/:key', HttpMethod.GET)
  async findDistinct(ctx) {
    const { key } = ctx.params
    const resp = await findDistinct(builder.Model, key)
    ctx.res.ok({ data: resp })
  }
}

export default Users
