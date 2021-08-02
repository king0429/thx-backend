import { Controller } from 'egg';
import { todayOrder, contact } from '../../mock/index'


export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = {todayOrder: await this.service.home.getTodayOrder(todayOrder), contact: await this.service.home.getContact(contact)}
  }
  public async productTypes () {
    const ctx = this.ctx
    ctx.body = {code: 0, success: true, data: [
      {name: '自动车'},
      {name: '打头机'},
      {name: '二次加工'},
      {name: '搓牙机'},
      {name: '品检部'},
      {name: '数控走心'},
      {name: '机加工'}      
    ]}
  }
}
