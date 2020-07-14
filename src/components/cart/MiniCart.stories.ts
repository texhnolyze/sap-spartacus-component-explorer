import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { MiniCartComponent, MiniCartModule } from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { of } from 'rxjs';

const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'ActiveCartId';
    getActive = () =>
      of({
        deliveryItemsQuantity: 5,
        totalPrice: {
          formattedValue: '1364€',
        },
      });
  },
};

export default {
  title: 'Cart/MiniCart',
  decorators: [setupSpartacus([MiniCartModule], [ActiveCartServiceProvider])],
};

export const Default = () => ({
  component: MiniCartComponent,
});
