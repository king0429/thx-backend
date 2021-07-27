import { Controller } from 'egg';
import { todayOrder } from '../../mock/index'


export default class HomeController extends Controller {
  public async todayOrder() {
    const { ctx } = this;
    ctx.body =  await this.service.home.getTodayOrder(todayOrder)
  }
}
