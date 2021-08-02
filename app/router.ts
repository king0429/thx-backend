import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/today_order', controller.api.todayOrder);
  router.get('/api/today_contact', controller.api.todayContact);
};
