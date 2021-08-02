import { Controller } from 'egg';


export default class customerController extends Controller {
  async orderCustomers () {
    const data:Array<string> = await this.ctx.service.customer.orderCustomser()
    this.ctx.body = {success: true, code: 0, data}
  }
}