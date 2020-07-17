import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  CheckoutOrderSummaryComponent,
  CheckoutOrderSummaryModule,
} from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { of } from 'rxjs';

const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'ActiveCartId';
    getActive = () =>
      of({
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
      });
  },
};

export default {
  title: 'Checkout/CheckoutOrderSummary',
  decorators: [
    setupSpartacus([CheckoutOrderSummaryModule], [ActiveCartServiceProvider]),
  ],
};

export const Default = () => ({
  component: CheckoutOrderSummaryComponent,
});
