import { Controller } from 'egg';


export default class productionController extends Controller {
  public async index() {
    const ctx = this.ctx
    const data:string = await this.ctx.service.product.list()
    ctx.body = { success: true, data }
  }
}