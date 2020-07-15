import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  DeliveryModeComponent,
  DeliveryModeModule,
} from '@spartacus/storefront';
import { CheckoutDeliveryService } from '@spartacus/core';
import { of } from 'rxjs';

let deliveryModes;
const supportedDeliveryModes = [
  {
    code: '1',
    name: 'Standard Delivery',
    deliveryCost: {
      formattedValue: '8,99€',
    },
    description: '3-5 business days',
  },
  {
    code: '2',
    name: 'Premium Delivery',
    deliveryCost: {
      formattedValue: '19,99€',
    },
    description: '1-2 business days',
  },
  {
    code: '3',
    name: 'Same Day Delivery',
    deliveryCost: {
      formattedValue: '100€',
    },
    description: 'Same business day if order is placed before 15.00',
  },
];

const CheckoutDeliveryServiceProvider = {
  provide: CheckoutDeliveryService,
  useClass: class CheckoutDeliveryServiceMock {
    getSupportedDeliveryModes() {
      return of(deliveryModes);
    }
    getSelectedDeliveryMode() {
      return of(supportedDeliveryModes[1]);
    }
  },
};

export default {
  title: 'Checkout/DeliveryMode',
  decorators: [
    setupSpartacus([DeliveryModeModule], [CheckoutDeliveryServiceProvider]),
  ],
};

export const Default = () => {
  deliveryModes = supportedDeliveryModes;
  return {
    component: DeliveryModeComponent,
  };
};

export const Loading = () => {
  deliveryModes = [];
  return {
    component: DeliveryModeComponent,
  };
};
