import { Controller } from 'egg';


export default class contactController extends Controller {
  async index () {
    const data:Array<string> = await this.ctx.service.contact.list()
    this.ctx.body = {success: true, code: 0, data}
  }
}