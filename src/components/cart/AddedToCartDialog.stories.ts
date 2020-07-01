import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  AddedToCartDialogComponent,
  AddToCartModule,
  PromotionService,
} from '@spartacus/storefront';
import { ActiveCartService } from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

const activeCart = of({
  deliveryItemsQuantity: 14,
  subTotal: { formattedValue: '140 €' },
});
const ActiveCartServiceProvider = {
  provide: ActiveCartService,
  useClass: class ActiveCartServiceMock {
    getActiveCartId = () => 'id';
    getActive = () => activeCart;
    updateEntry = action('ActiveCartService:updateEntry');
  },
};

const PromotionServiceProvider = {
  provide: PromotionService,
  useClass: class PromotionServiceMock {
    getOrderPromotions = () =>
      of([
        { description: 'Buy over $100.00 get free shipping' },
        { description: 'Buy over $200.00 get $20.00 discount on cart' },
      ]);
  },
};

export default {
  title: 'Cart/AddedToCartDialog',
  decorators: [setupSpartacus([AddToCartModule], [ActiveCartServiceProvider])],
};

const defaultEntry = {
  entryNumber: 0,
  quantity: 7,
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
};
export const Default = () => ({
  component: AddedToCartDialogComponent,
  props: {
    quantity: 4,
    cart$: activeCart,
    loaded$: of(true),
    entry$: of(defaultEntry),
  },
});

export const IncrementQuantity = () => ({
  component: AddedToCartDialogComponent,
  props: {
    increment: 44,
    cart$: activeCart,
    loaded$: of(true),
    entry$: of(defaultEntry),
  },
});

export const Loading = () => ({
  component: AddedToCartDialogComponent,
  props: {
    loaded$: of(false),
  },
});
