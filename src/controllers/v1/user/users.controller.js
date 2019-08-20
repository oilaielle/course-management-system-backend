import { HttpMethod, route } from '@spksoft/koa-decorator'
import listUser from '../../../domains/user/list'
import createUser from '../../../domains/user/create'
import updateUser from '../../../domains/user/update'
import viewUser from '../../../domains/user/view'
import deleteUser from '../../../domains/user/delete'

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

  @route('/:id', HttpMethod.PUT)
  async updateUser(ctx) {
    const { id } = ctx.params
    const { body } = ctx.request
    const resp = await updateUser(id, body)
    ctx.res.ok({ data: resp })
  }

  @route('/:id', HttpMethod.GET)
  async viewUser(ctx) {
    const { id } = ctx.params
    const resp = await viewUser(id)
    ctx.res.ok({ data: resp })
  }

  @route('/:id', HttpMethod.DELETE)
  async deleteUser(ctx) {
    const { id } = ctx.params
    const resp = await deleteUser(id)
    ctx.res.ok({ data: resp })
  }
}

export default Users
