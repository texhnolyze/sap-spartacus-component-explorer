import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { CartSharedModule, OrderSummaryComponent } from '@spartacus/storefront';

export default {
  title: 'Cart/OrderSummary',
  decorators: [setupSpartacus([CartSharedModule])],
};

let cart = {
  subTotal: {
    formattedValue: '524,53€',
  },
  deliveryCost: {
    formattedValue: null,
  },
  totalTax: {
    formattedValue: '45,99€',
  },
  totalPriceWithTax: {
    formattedValue: '670,52€',
  },
  totalDiscounts: {
    value: 1,
    formattedValue: '10€',
  },
  net: true,
};

export const Default = () => {
  cart.deliveryCost.formattedValue = '100 €';
  return {
    component: OrderSummaryComponent,
    props: {
      cart,
    },
  };
};

export const UnknownDeliveryCost = () => {
  cart.deliveryCost.formattedValue = null;
  return {
    component: OrderSummaryComponent,
    props: {
      cart,
    },
  };
};
