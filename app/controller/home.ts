import { Controller } from 'egg';
import { todayOrder, contact } from '../../mock/index'


export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = {todayOrder: await this.service.home.getTodayOrder(todayOrder), contact: await this.service.home.getContact(contact)}
  }
}
