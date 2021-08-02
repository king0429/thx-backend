import { Controller } from 'egg';


export default class orderController extends Controller {
  public async index() {
    const ctx = this.ctx
    const page:number = ctx.query.page ? Number(ctx.query.page) : 1
    const pageSize:number = ctx.query.page_size ? Number(ctx.query.page_size) : 10
    let list:Array<any> = await this.ctx.service.order.list()
    if (ctx.query.order_number) {
      list = list.filter(val => val.order_number.includes(ctx.query.order_number))
    }
    if (ctx.query.product_name) {
      list = list.filter(val => val.product_name.includes(ctx.query.product_name))
    }
    if (ctx.query.customer) {
      list = list.filter(val => val.order_customer === ctx.query.customer)
    }
    if (ctx.query.plan_delivery_date) {
      console.log(ctx.query.plan_delivery_date)
      list = list.filter(val => val.deliver_date === ctx.query.plan_delivery_date)
    }
    if (ctx.query.real_delivery_date) {
      list = list.filter(val => val.real_delivery_date === ctx.query.real_delivery_date)
    }
    if (ctx.query.warehouse_date) {
      list = list.filter(val => val.warehouse_date === ctx.query.warehouse_date)
    }
    const total = list.length
    const data:Array<any> = list.splice((page - 1) * pageSize, pageSize)
    ctx.body = { success: true, data: {list: data, total} }
  }
}