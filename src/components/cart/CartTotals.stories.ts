import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { CartTotalsComponent, CartTotalsModule } from '@spartacus/storefront';
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
    getEntries = () =>
      of([
        {
          entryNumber: 0,
        },
      ]);
  },
};

export default {
  title: 'Cart/CartTotals',
  decorators: [setupSpartacus([CartTotalsModule], [ActiveCartServiceProvider])],
};

export const Default = () => ({
  component: CartTotalsComponent,
});
