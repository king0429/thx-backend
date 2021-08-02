import { Controller } from 'egg';


export default class productionController extends Controller {
  public async index() {
    const ctx = this.ctx
    const data:Array<any> = await this.ctx.service.purchase.list()
    ctx.body = { success: true, data }
  }
}