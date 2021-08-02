import { Service } from 'egg';
const cherrio = require('cheerio')
import orderStr from '../../mock/order';
/**
 * Test Service
 */
export default class Order extends Service {
  async list (): Promise<any> {
    const $:any = cherrio.load(orderStr)
    const info:any = $('div')
    const res: Array<Array<string>> = []
    Object.values(info).map((val:any) => {
      return val.children && val.children[0] ? (val.children[0].data ? val.children[0].data : val.children[0].children[0].data) : ''
    }).forEach((val:string, index:number) => {
      if (index % 9 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data = res.filter((_val:Array<string>, index:number) => index !== 0).map((val: Array<string>) => {
      return {
        // 订单号
        order_number: val[0],
        // 产品名称
        order_prodcut_name: val[1],
        // 客户
        order_customer: val[2],
        // 订单数量
        order_amount: val[3],
        // 交货日期
        deliver_date: val[4],
        // 出货数量
        deliver_amount: val[5],
        // 出货日期
        real_delivery_date: val[6],
        // 迟交天数
        delay_date: val[7],
        // 入库日期
        warehouse_date: val[8],
      }
    })
    return data.splice(0, data.length - 1)
  }
}