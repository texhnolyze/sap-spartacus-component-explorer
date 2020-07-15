import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  CheckoutProgressComponent,
  CheckoutProgressModule,
} from '@spartacus/storefront';
import { RoutingService } from '@spartacus/core';
import { of } from 'rxjs';

const RoutingServiceProvider = {
  provide: RoutingService,
  useClass: class RoutingServiceMock {
    getPageContext = () => of({});
    getRouterState = () =>
      of({
        state: { context: { id: '/checkout/payment-details' } },
      });
  },
};

export default {
  title: 'Checkout/CheckoutProgress',
  decorators: [
    setupSpartacus([CheckoutProgressModule], [RoutingServiceProvider]),
  ],
};

export const Default = () => ({
  component: CheckoutProgressComponent,
});
