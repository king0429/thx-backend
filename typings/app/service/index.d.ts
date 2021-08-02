// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportContact from '../../../app/service/contact';
import ExportCustomer from '../../../app/service/customer';
import ExportHome from '../../../app/service/home';
import ExportOrder from '../../../app/service/order';
import ExportProduct from '../../../app/service/product';
import ExportPurchase from '../../../app/service/purchase';
import ExportTest from '../../../app/service/Test';
import ExportWarehouse from '../../../app/service/warehouse';

declare module 'egg' {
  interface IService {
    contact: AutoInstanceType<typeof ExportContact>;
    customer: AutoInstanceType<typeof ExportCustomer>;
    home: AutoInstanceType<typeof ExportHome>;
    order: AutoInstanceType<typeof ExportOrder>;
    product: AutoInstanceType<typeof ExportProduct>;
    purchase: AutoInstanceType<typeof ExportPurchase>;
    test: AutoInstanceType<typeof ExportTest>;
    warehouse: AutoInstanceType<typeof ExportWarehouse>;
  }
}
