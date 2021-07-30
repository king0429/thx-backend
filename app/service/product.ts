import { Service } from 'egg';
const cherrio = require('cheerio')
import p_1 from '../../mock/producttion/p_1';
/**
 * Test Service
 */
export default class Test extends Service {
  async list (): Promise<any> {
    const $:any = cherrio.load(p_1)
    const info:any = $('div')
    const res: Array<Array<string>> = []
    Object.values(info).map((val:any, index: number) => {
      if (!index) {
        console.log(val.children)
      }
      return val.children && val.children[0] ? val.children[0].data : ''
    }).filter(val => val).forEach((val:string, index:number) => {
      if (index % 7 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data = res.filter((_val:Array<string>, index:number) => index !== 0).map((val: Array<string>) => {
      return {
        // 生产日期
        product_date: val[0],
        // 机台号
        device_number: val[1],
        // 产品名称
        product_name: val[2],
        // 生产数量
        product_amount: val[3],
        // 负责师傅
        productor_ownner: val[4],
        // 操机员
        product_operator: val[5],
        // 状态
        product_status: val[6]
      }
    })
    return data
  }
}