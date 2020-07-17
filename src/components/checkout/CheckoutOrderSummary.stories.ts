import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  CheckoutOrderSummaryComponent,
  CheckoutOrderSummaryModule,
} from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { of } from 'rxjs';

const cartEntries = [
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
