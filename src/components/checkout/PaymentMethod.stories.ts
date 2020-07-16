import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  PaymentMethodComponent,
  PaymentMethodModule,
} from '@spartacus/storefront';
import {
  ActiveCartService,
  CheckoutDeliveryService,
  CheckoutPaymentService,
  UserPaymentService,
} from '@spartacus/core';
import { of } from 'rxjs';

let loading;
const CheckoutDeliveryServiceProvider = {
  provide: CheckoutDeliveryService,
  useClass: class CheckoutDeliveryServiceMock {
    getAddressVerificationResults() {
      return of({ decision: 'ACCEPT ' });
    }
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
    getPaymentMethodsLoading = () => of(loading);
    loadPaymentMethods = () => {};
    getPaymentMethods = () =>
      of([
        {
          id: '1',
          defaultPayment: true,
          accountHolderName: 'James Holden',
          cardNumber: '**** **** **** *123',
          cardType: { code: 'visa' },
          expiryMonth: '05',
          expiryYear: '2025',
        },
        {
          id: '2',
          defaultPayment: false,
          accountHolderName: 'Jane Holden',
          cardNumber: '**** **** **** *456',
          cardType: { code: 'master' },
          expiryMonth: '01',
          expiryYear: '2020',
        },
      ]);
    getAllBillingCountries() {
      return of([{ isocode: 'de' }, { isocode: 'USA' }]);
    }
  },
};
const CheckoutPaymentServiceProvider = {
  provide: CheckoutPaymentService,
  useClass: class CheckoutPaymentServiceMock {
    getSetPaymentDetailsResultProcess = () => of({ loading });
    paymentProcessSuccess = () => {};
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
    getPaymentDetails = () => of({ id: '1' });
    setPaymentDetails = () => {};
    loadSupportedCardTypes = () => of([]);
  },
};

const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'ActiveCartId';
    getActive = () => of({});
    isGuestCart = () => false;
  },
};

export default {
  title: 'Checkout/PaymentMethod',
  decorators: [
    setupSpartacus(
      [PaymentMethodModule],
      [
        CheckoutPaymentServiceProvider,
        CheckoutDeliveryServiceProvider,
        UserPaymentServiceProvider,
        ActiveCartServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  loading = false;
  return {
    component: PaymentMethodComponent,
  };
};

export const Loading = () => {
  loading = true;
  return {
    component: PaymentMethodComponent,
  };
};
