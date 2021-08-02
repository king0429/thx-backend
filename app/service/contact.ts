import { Service } from "egg";
const cherrio = require('cheerio')
import contactStr from '../../mock/contact'


export default class ContactServce extends Service {
  async list ():Promise<Array<any>> {
    const $ = cherrio.load(contactStr)
    const _s = $('td')
    const res:Array<Array<any>> = []
    Object.values(_s).filter((val:any) => val.data || val.data === '').map((val:any) => {
      return val.data
    }).forEach((val:string, index) => {
      if (index % 6 === 0) {
        res.push([val])
      } else {
        res[res.length - 1].push(val)
      }
    })
    const data:Array<any> = res.filter((_val:any, index:number) => index !== 0).map((val:Array<string>) => {
      return {
        date: val[0],
        append_from: val[2],
        send_to: val[3],
        theme: val[1],
        sign: val[4],
        type: val[5]
      }
    })
    return data.splice(0, data.length - 1)
  }
}