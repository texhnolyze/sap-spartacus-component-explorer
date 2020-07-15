import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { PaymentFormComponent, PaymentFormModule } from '@spartacus/storefront';
import {
  CheckoutDeliveryService,
  CheckoutPaymentService,
  UserPaymentService,
} from '@spartacus/core';
import { of } from 'rxjs';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

let loading;

const CheckoutDeliveryServiceProvider = {
  provide: CheckoutDeliveryService,
  useClass: class CheckoutDeliveryServiceMock {
    getDeliveryAddress() {
      return of({
        firstName: 'Jensen',
        lastName: 'Osinski',
        line1: '9865 Hal Road',
        town: 'South Eddie',
        postalCode: 'MT 24603',
        country: { isocode: 'USA' },
      });
    }
  },
};
const UserPaymentServiceProvider = {
  provide: UserPaymentService,
  useClass: class UserPaymentServiceMock {
    getAllBillingCountries() {
      return of([{ isocode: 'de' }, { isocode: 'USA' }]);
    }
  },
};
const CheckoutPaymentServiceProvider = {
  provide: CheckoutPaymentService,
  useClass: class CheckoutPaymentServiceMock {
    getSetPaymentDetailsResultProcess = () => of({ loading });
    getCardTypes = () =>
      of([
        {
          code: 'visa',
          name: 'Visa',
        },
        {
          code: 'maestro',
          name: 'Maestro',
        },
        {
          code: 'amexp',
          name: 'American Express',
        },
        {
          code: 'master',
          name: 'Mastercard',
        },
      ]);
    loadSupportedCardTypes = () => of([]);
  },
};

export default {
  title: 'Checkout/PaymentForm',
  decorators: [
    setupSpartacus(
      [PaymentFormModule],
      [
        CheckoutPaymentServiceProvider,
        CheckoutDeliveryServiceProvider,
        UserPaymentServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  loading = false;
  return {
    component: PaymentFormComponent,
    props: {
      setAsDefaultField: boolean('setAsDefaultField', true),
      paymentMethodsCount: number('paymentMethodsCount', 0),
      setPaymentDetails: action('setPaymentDetails'),
      closeForm: action('closeForm'),
      goBack: action('goBack'),
    },
  };
};

export const Loading = () => {
  loading = true;
  return {
    component: PaymentFormComponent,
  };
};
