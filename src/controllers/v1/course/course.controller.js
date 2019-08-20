import { HttpMethod, route } from '@spksoft/koa-decorator'
import listCourse from '../../../domains/course/list'
import createCourse from '../../../domains/course/create'
import updateCourse from '../../../domains/course/update'
import viewCourse from '../../../domains/course/view'
import deleteCourse from '../../../domains/course/delete'

@route('/v1/course')
class Course {
  @route('/', HttpMethod.GET)
  async listCourse(ctx) {
    const { search, ...options } = ctx.query
    const resp = await listCourse(search, options)
    ctx.res.ok({ data: resp })
  }

  @route('/', HttpMethod.POST)
  async createCourse(ctx) {
    const { body } = ctx.request
    const resp = await createCourse(body)
    ctx.res.ok({ data: resp })
  }

  @route('/:id', HttpMethod.PUT)
  async updateCourse(ctx) {
    const { id } = ctx.params
    const { body } = ctx.request
    const resp = await updateCourse(id, body)
    ctx.res.ok({ data: resp })
  }

  @route('/:id', HttpMethod.GET)
  async viewCourse(ctx) {
    const { id } = ctx.params
    const resp = await viewCourse(id)
    ctx.res.ok({ data: resp })
  }

  @route('/:id', HttpMethod.DELETE)
  async deleteCourse(ctx) {
    const { id } = ctx.params
    const resp = await deleteCourse(id)
    ctx.res.ok({ data: resp })
  }
}

export default Course
