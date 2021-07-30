import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/today_order', controller.api.todayOrder);
  router.get('/api/product_list', controller.home.productTypes)
  router.get('/api/product', controller.product.index)
  router.get('/api/warehouse', controller.warehouse.index)
  router.get('/api/purchase', controller.purchase.index)
};
