// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportContact from '../../../app/controller/contact';
import ExportCustomer from '../../../app/controller/customer';
import ExportHome from '../../../app/controller/home';
import ExportOrder from '../../../app/controller/order';
import ExportProduct from '../../../app/controller/product';
import ExportPurchase from '../../../app/controller/purchase';
import ExportWarehouse from '../../../app/controller/warehouse';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    contact: ExportContact;
    customer: ExportCustomer;
    home: ExportHome;
    order: ExportOrder;
    product: ExportProduct;
    purchase: ExportPurchase;
    warehouse: ExportWarehouse;
  }
}
