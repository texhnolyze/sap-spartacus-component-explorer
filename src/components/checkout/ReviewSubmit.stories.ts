import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  PromotionService,
  ReviewSubmitComponent,
  ReviewSubmitModule,
} from '@spartacus/storefront';
import {
  ActiveCartService,
  CheckoutDeliveryService,
  CheckoutPaymentService,
  UserAddressService,
} from '@spartacus/core';
import { of } from 'rxjs';

let cartEntries = [
  {
    entryNumber: 0,
    quantity: 2,
    updateable: true,
    basePrice: {
      formattedValue: '$541.34',
    },
    totalPrice: {
      formattedValue: '$1,624.02',
    },
    product: {
      code: 'product-code-8525-86754-24356',
      images: {
        PRIMARY: {
          url: 'https://placehold.jp/150x150.png?text=product-image',
        },
      },
      name: 'Handcrafted Metal Soap',
      purchasable: true,
      stock: {
        stockLevelStatus: 'inStock',
      },
    },
  },
  {
    entryNumber: 1,
    updateable: false,
    quantity: 3,
    basePrice: {
      formattedValue: '$189.00',
    },
    totalPrice: {
      formattedValue: '$567.00',
    },
    product: {
      code: '1992-693-7557-007',
      configurable: false,
      images: {
        PRIMARY: {
          url: 'https://placehold.jp/150x150.png?text=product-image',
        },
      },
      name: 'Refined Wooden Computer',
      purchasable: true,
    },
  },
  {
    entryNumber: 2,
    quantity: 21,
    updateable: true,
    basePrice: {
      formattedValue: '$1.00',
    },
    totalPrice: {
      formattedValue: '$21.00',
    },
    product: {
      code: '8653-80123-74124',
      images: {
        PRIMARY: {
          url: 'https://placehold.jp/150x150.png?text=product-image',
        },
      },
      name: 'Incredible Soft Sausages',
      purchasable: true,
      stock: {
        stockLevel: 26,
        stockLevelStatus: 'inStock',
      },
    },
  },
];

const CheckoutDeliveryServiceProvider = {
  provide: CheckoutDeliveryService,
  useClass: class CheckoutDeliveryServiceMock {
    getDeliveryAddress = () =>
      of({
        firstName: 'Jensen',
        lastName: 'Osinski',
        line1: '9865 Hal Road',
        town: 'South Eddie',
        postalCode: 'MT 24603',
        country: { isocode: 'USA' },
      });
    getSelectedDeliveryMode = () =>
      of({
        code: '2',
        name: 'Premium Delivery',
        deliveryCost: {
          formattedValue: '19,99€',
        },
        description: '1-2 business days',
      });
    loadSupportedDeliveryModes = () => of([]);
  },
};

const CheckoutPaymentServiceProvider = {
  provide: CheckoutPaymentService,
  useClass: class CheckoutPaymentServiceMock {
    getPaymentDetails = () =>
      of({
        id: '1',
        defaultPayment: true,
        accountHolderName: 'James Holden',
        cardNumber: '**** **** **** *123',
        cardType: { code: 'visa' },
        expiryMonth: '05',
        expiryYear: '2025',
      });
  },
};

const UserAddressServiceProvider = {
  provide: UserAddressService,
  useClass: class UserAddressServiceMock {
    getCountry = () => of('Germany');
    loadDeliveryCountries = () => [];
  },
};

const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'ActiveCartId';
    getActive = () =>
      of({
        totalItems: 4,
        code: '0000179210',
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
    getEntries = () => of(cartEntries);
  },
};

const PromotionServiceProvider = {
  provide: PromotionService,
  useClass: class PromotionServiceMock {
    getProductPromotionForEntry = () =>
      of([{ description: '10% off, summer sale' }]);
    getOrderPromotions = () =>
      of([
        { description: 'Buy over $100.00 get free shipping' },
        { description: 'Buy over $200.00 get $20.00 discount on cart' },
      ]);
  },
};

export default {
  title: 'Checkout/ReviewSubmit',
  decorators: [
    setupSpartacus(
      [ReviewSubmitModule],
      [
        CheckoutDeliveryServiceProvider,
        CheckoutPaymentServiceProvider,
        UserAddressServiceProvider,
        ActiveCartServiceProvider,
        PromotionServiceProvider,
      ]
    ),
  ],
};

export const Default = () => ({
  component: ReviewSubmitComponent,
});
