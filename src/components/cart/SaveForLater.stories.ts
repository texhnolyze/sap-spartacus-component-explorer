import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  SaveForLaterComponent,
  SaveForLaterModule,
} from '@spartacus/storefront';
import {
  ActiveCartService,
  CmsService,
  SelectiveCartService,
} from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

let cartEntries;
const defaultEntries = [
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
        stockLevel: 734,
        stockLevelStatus: 'inStock',
      },
    },
  },
  {
    entryNumber: 1,
    updateable: true,
    quantity: 3,
    basePrice: {
      formattedValue: '$189.00',
    },
    totalPrice: {
      formattedValue: '$567.00',
    },
    product: {
      code: '1992-693-7557-007',
      configurable: true,
      images: {
        PRIMARY: {
          url: 'https://placehold.jp/150x150.png?text=product-image',
        },
      },
      name: 'Refined Wooden Computer',
      purchasable: false,
      stock: {
        stockLevel: 12,
        stockLevelStatus: 'inStock',
      },
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
        totalItems: 0,
        code: '0000179210',
      });
    isStable = () => of(true);
    addEntry = action('ActiveCartService:addEntry');
    removeEntry = action('ActiveCartService:removeEntry');
  },
};

const SelectiveCartServiceProvider = {
  provide: SelectiveCartService,
  useClass: class SelectiveCartServiceMock {
    getCart = () =>
      of({
        totalItems: 3,
        code: '0000179210',
      });
    getEntries = () => of(cartEntries);
    isEnabled = () => true;
    getLoaded = () => of(true);
    removeEntry = action('SelectiveCartServiceProvider:removeEntry');
  },
};

const CmsServiceProvider = {
  provide: CmsService,
  useClass: class CmsServiceProviderMock {
    getComponentData = () =>
      of({ content: '<p>Empty Cart Info (EmptyCartParagraphComponent)</p>' });
    getCurrentPage = () => of({});
  },
};

export default {
  title: 'Cart/SaveForLater',
  decorators: [
    setupSpartacus(
      [SaveForLaterModule],
      [
        ActiveCartServiceProvider,
        SelectiveCartServiceProvider,
        CmsServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  cartEntries = defaultEntries;
  return {
    component: SaveForLaterComponent,
  };
};
