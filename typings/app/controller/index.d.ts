// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportHome from '../../../app/controller/home';
import ExportProduct from '../../../app/controller/product';
import ExportPurchase from '../../../app/controller/purchase';
import ExportWarehouse from '../../../app/controller/warehouse';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    home: ExportHome;
    product: ExportProduct;
    purchase: ExportPurchase;
    warehouse: ExportWarehouse;
  }
}
