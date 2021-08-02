import { Service } from "egg";
const cherrio = require('cheerio')
import { contact } from '../../mock/index'


export default class ContactServce extends Service {
  async list ():Promise<Array<any>> {
    const $ = cherrio.load(contact)
    const _s = $('td')
    const res:Array<Array<any>> = []
    Object.values(_s).map((val:any) => {
      if (!val.children || !val.children[0]) return false
      if (!val.children[0].children) return val.children[0].data
      return val.children[0]?.children[0]?.data
    }).forEach((val:any, index) => {
      if (index % 5 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data:Array<any> = res.filter((_val:any, index:number) => index !== 0).map((val:Array<string>) => {
      return {
        date: val[0],
        append_from: val[1],
        send_to: val[2],
        theme: val[3],
      }
    })
    return data.splice(0, data.length - 1)
  }
}