import { Service } from 'egg'

export default class CustomerService extends Service {
  async orderCustomser ():Promise<Array<string>> {
    const orderList:Array<any> = await this.ctx.service.order.list()
    const customers = orderList.map((val:any) => val.order_customer)
    return Array.from(new Set(customers))
  }
}
