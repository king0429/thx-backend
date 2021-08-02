import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/today_order', controller.api.todayOrder);
  router.get('/api/today_contact', controller.api.todayContact);
  router.get('/api/product_list', controller.home.productTypes)
  router.get('/api/order', controller.order.index);
  router.get('/api/order/customer', controller.customer.orderCustomers);
  router.get('/api/product', controller.product.index)
  router.get('/api/warehouse', controller.warehouse.index)
  router.get('/api/purchase', controller.purchase.index)
  router.get('/api/contact', controller.contact.index)
};
