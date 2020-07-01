import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  CartDetailsComponent,
  CartDetailsModule,
  PromotionService,
} from '@spartacus/storefront';
import {
  ActiveCartService,
  AuthService,
  SelectiveCartService,
} from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

let isUserLoggedIn = true;

let cartEntries;
const defaultCartEntries = [
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
        totalItems: 4,
        code: '0000179210',
      });
    getEntries = () => of(cartEntries);
    isStable = () => of(true);
    removeEntry = action('ActiveCartService:removeEntry');
    updateEntry = action('ActiveCartService:updateEntry');
  },
};

const SelectiveCartServiceProvider = {
  provide: SelectiveCartService,
  useClass: class SelectiveCartServiceMock {
    isEnabled = () => true;
    getLoaded = () => of(true);
    addEntry = action('SelectiveCartServiceProvider:addEntry');
  },
};

const PromotionServiceProvider = {
  provide: PromotionService,
  useClass: class PromotionServiceMock {
    getOrderPromotionsFromCart() {}
    getProductPromotionForEntry() {}
    getOrderPromotions = () =>
      of([
        { description: 'Buy over $100.00 get free shipping' },
        { description: 'Buy over $200.00 get $20.00 discount on cart' },
      ]);
  },
};

const AuthServiceProvider = {
  provide: AuthService,
  useClass: class AuthServiceMock {
    getOccUserId = () => of('id');
    isUserLoggedIn = () => of(isUserLoggedIn);
  },
};

export default {
  title: 'Cart/CartDetails',
  decorators: [
    setupSpartacus(
      [CartDetailsModule],
      [
        ActiveCartServiceProvider,
        PromotionServiceProvider,
        SelectiveCartServiceProvider,
        AuthServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  cartEntries = defaultCartEntries;
  return {
    component: CartDetailsComponent,
  };
};

export const EmptyCart = () => {
  cartEntries = [];
  return {
    component: CartDetailsComponent,
  };
};
