import { Service } from 'egg';
const cherrio = require('cheerio')
import warehouse from '../../mock/wartehouse';
/**
 * Test Service
 */
export default class Warehouse extends Service {
  async list (): Promise<any> {
    const $:any = cherrio.load(warehouse)
    const info:any = $('div')
    const res: Array<Array<string>> = []
    Object.values(info).map((val:any, index: number) => {
      if (!index) {
        console.log(val.children)
      }
      return val.children && val.children[0] ? val.children[0].data : ''
    }).forEach((val:string, index:number) => {
      if (index % 6 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data = res.filter((_val:Array<string>, index:number) => index > 1).map((val: Array<string>) => {
      return {
        // 类别
        warehouse_type: val[0]?.trim(),
        // 规格
        warehouse_style: val[1]?.trim(),
        // 价格
        warehouse_price: val[2]?.trim(),
        // 库存数量
        warehouse_amount: val[3]?.trim(),
        // 单重
        warehouse_unit_weight: val[4]?.trim(),
      }
    })
    return data
  }
}