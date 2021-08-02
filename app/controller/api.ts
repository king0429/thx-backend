import { Controller } from 'egg';
import { todayOrder, contact } from '../../mock/index'


export default class HomeController extends Controller {
  public async todayOrder() {
    const { ctx } = this;
    ctx.body =  await this.service.home.getTodayOrder(todayOrder)
  }
  public async todayContact() {
    const { ctx } = this;
    ctx.body = await this.service.home.getContact(contact)
  }
}
