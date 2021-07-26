
import { Service } from 'egg';
const cherrio = require('cheerio')
/**
 * Test Service
 */
export default class Test extends Service {
  getTodayOrder (tableStr:string) {
    const $ = cherrio.load(tableStr)
    const _s = $('td')
    console.log('++++++++++++++++++++++++++++')
    const res:Array<Array<any>> = []
    Object.values(_s).map((val:any) => {
      if (!val.children || !val.children[0]) return false
      if (!val.children[0].children) return false
      return val.children[0]?.children[0]?.data
    }).filter(val => val !== false).forEach((val:any, index) => {
      if (index % 8 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    return res
  }
  getContact (tableStr:string) {
    console.log(tableStr)
    const $ = cherrio.load(tableStr)
    const _s = $('td')
    console.log('++++++++++++++++++++++++++++')
    const res:Array<Array<any>> = []
    Object.values(_s).map((val:any) => {
      if (!val.children || !val.children[0]) return false
      if (!val.children[0].children) return val.children[0].data
      return val.children[0]?.children[0]?.data
    }).filter(val => val !== false).forEach((val:any, index) => {
      if (index % 5 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    return res
  }
}
