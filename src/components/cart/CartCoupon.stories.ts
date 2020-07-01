import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { CartCouponComponent, CartCouponModule } from '@spartacus/storefront';
import {
  ActiveCartService,
  CartVoucherService,
  CustomerCouponService,
} from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

let customerCoupons;
const defaultCustomerCoupons = {
  coupons: [
    {
      couponId: '25%SummerSale',
      name: '25% Summer Sale',
    },
    {
      couponId: '100%BankruptUs',
      name: '100% Bankrupt us',
    },
  ],
};
const CustomerCouponServiceProvider = {
  provide: CustomerCouponService,
  useClass: class CustomerCouponServiceMock {
    loadCustomerCoupons() {}
    getCustomerCoupons = () => of(customerCoupons);
  },
};

let appliedVouchers;
const defaultAppliedVouchers1 = [
  { code: '1', voucherCode: '3%WinterSale' },
  { code: '2', voucherCode: '25%SummerSale' },
  { code: '3', voucherCode: '10%ForSpecialSnowflakes' },
];
const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'id';
    getActive = () =>
      of({
        appliedVouchers,
      });
    isStable = () => of(true);
  },
};

const CartVoucherServiceProvider = {
  provide: CartVoucherService,
  useClass: class CartVoucherServiceMock {
    resetAddVoucherProcessingState() {}
    getAddVoucherResultSuccess = () => of(true);
    getAddVoucherResultError = () => of(false);
    addVoucher = action('addVoucher');
    removeVoucher = action('removeVoucher');
  },
};

export default {
  title: 'Cart/CartCoupon',
  decorators: [
    setupSpartacus(
      [CartCouponModule],
      [
        CustomerCouponServiceProvider,
        ActiveCartServiceProvider,
        CartVoucherServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  appliedVouchers = defaultAppliedVouchers1;
  customerCoupons = defaultCustomerCoupons;
  return {
    component: CartCouponComponent,
  };
};

export const NoAppliedVouchers = () => {
  appliedVouchers = [];
  customerCoupons = defaultCustomerCoupons;
  return {
    component: CartCouponComponent,
  };
};

export const NoAvailableCoupons = () => {
  appliedVouchers = defaultAppliedVouchers1;
  customerCoupons = [];
  return {
    component: CartCouponComponent,
  };
};

export const Empty = () => {
  appliedVouchers = [];
  customerCoupons = [];
  return {
    component: CartCouponComponent,
  };
};
