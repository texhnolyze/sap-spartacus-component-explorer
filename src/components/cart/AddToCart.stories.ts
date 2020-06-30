import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  AddToCartComponent,
  AddToCartModule,
  ModalService,
} from '@spartacus/storefront';
import { boolean, object, text } from '@storybook/addon-knobs';
import { ActiveCartService } from '@spartacus/core';
import { of } from 'rxjs';

const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'id';
    getEntry = () =>
      of({
        quantity: 4,
        product: {
          images: {
            PRIMARY: {
              thumbnail: { url: 'https://placehold.jp/96x96.png?text=product' },
            },
          },
        },
        basePrice: { formattedValue: '10,50 €' },
        totalPrice: { formattedValue: '42 €' },
        updateable: true,
      });
    addEntry = () => {};
    updateEntry = () => {};
    getActive = () =>
      of({ deliveryItemsQuantity: 14, subTotal: { formattedValue: '140 €' } });
    isStable = () => of(true);
  },
};

const ModalServiceProvider = {
  provide: ModalService,
  useClass: class ModalServiceMock {
    open = () => ({ componentInstance: {} });
  },
};

export default {
  title: 'Cart/AddToCart',
  decorators: [setupSpartacus([AddToCartModule], [ActiveCartServiceProvider])],
};

export const Default = () => ({
  component: AddToCartComponent,
  props: {
    productCode: text('productCode', '123-456-789'),
    showQuantity: boolean('showQuantity', true),
    product: object('product', {
      code: '123-456-789',
      stock: {
        stockLevelStatus: 'inStock',
        stockLevel: 12,
      },
    }),
  },
});

export const OutOfStock = () => ({
  component: AddToCartComponent,
  props: {
    productCode: text('productCode', '123-456-789'),
    showQuantity: boolean('showQuantity', true),
    product: object('product', {
      code: '123-456-789',
      stock: {
        stockLevelStatus: 'outOfStock',
        stockLevel: 0,
      },
    }),
  },
});
