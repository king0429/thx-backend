import { Service } from 'egg';
const cherrio = require('cheerio')
import purchase from '../../mock/purchase';
/**
 * Test Service
 */
export default class Purchase extends Service {
  async list (): Promise<any> {
    const $:any = cherrio.load(purchase)
    const info:any = $('div')
    const res: Array<Array<string>> = []
    Object.values(info).map((val:any, index: number) => {
      if (!index) {
        console.log(val.children)
      }
      return val.children && val.children[0] ? val.children[0].data : ''
    }).forEach((val:string, index:number) => {
      if (index % 8 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data = res.filter((_val:Array<string>, index:number) => index !== 0).map((val: Array<string>) => {
      return {
        // 请购日期
        purchase_plan_date: val[0]?.trim(),
        // 品名规格
        purchase_style: val[1]?.trim(),
        // 采购日期
        purchase_date: val[2]?.trim(),
        // 采购数量
        purchase_amount: val[3]?.trim(),
        // 供应商
        purchase_supplier: val[4]?.trim(),
        // 领用部门
        get_part: val[5]?.trim(),
        // 领用人
        get_person: val[6]?.trim()
      }
    })
    return data
  }
}