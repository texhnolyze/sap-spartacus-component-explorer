import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { CartSharedModule, OrderSummaryComponent } from '@spartacus/storefront';

export default {
  title: 'Cart/OrderSummary',
  decorators: [setupSpartacus([CartSharedModule])],
};

export const Default = () => ({
  component: OrderSummaryComponent,
  props: {
    cart: {
      subTotal: {
        formattedValue: '524,53€',
      },
      deliveryCost: {
        formattedValue: '100€',
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
    },
  },
});
