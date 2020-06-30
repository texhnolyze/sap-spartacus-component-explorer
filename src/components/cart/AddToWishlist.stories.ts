import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  AddToWishListComponent,
  AddToWishListModule,
  CurrentProductService,
} from '@spartacus/storefront';
import { AuthService, WishListService } from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

let isUserLoggedIn;
let wishlistLoading;
let productAlreadyInWishlist;

const WishListServiceProvider = {
  provide: WishListService,
  useClass: class WishListServiceMock {
    getWishList = () =>
      of({
        entries: [
          { product: { code: productAlreadyInWishlist ? '123' : '456' } },
        ],
      });
    getWishListLoading = () => wishlistLoading;
    removeEntry = action('removeEntry');
    addEntry = action('addEntry');
  },
};

const CurrentProductServiceProvider = {
  provide: CurrentProductService,
  useClass: class CurrentProductServiceMock {
    getProduct = () =>
      of({
        code: '123',
        stock: {
          stockLevelStatus: 'inStock',
          stockLevel: 12,
        },
      });
  },
};

const AuthServiceProvider = {
  provide: AuthService,
  useClass: class AuthServiceMock {
    getOccUserId = () => of('id');
    isUserLoggedIn = () => isUserLoggedIn;
  },
};

export default {
  title: 'Cart/AddToWishlist',
  decorators: [
    setupSpartacus(
      [AddToWishListModule],
      [
        WishListServiceProvider,
        CurrentProductServiceProvider,
        AuthServiceProvider,
      ]
    ),
  ],
};

export const Default = () => {
  wishlistLoading = of(false);
  isUserLoggedIn = of(true);
  productAlreadyInWishlist = false;

  return { component: AddToWishListComponent };
};

export const AlreadyInWishlist = () => {
  wishlistLoading = of(false);
  isUserLoggedIn = of(true);
  productAlreadyInWishlist = true;

  return { component: AddToWishListComponent };
};

export const WishlistLoading = () => {
  wishlistLoading = of(true);
  isUserLoggedIn = of(true);
  productAlreadyInWishlist = false;

  return { component: AddToWishListComponent };
};

export const UserNotLoggedIn = () => {
  wishlistLoading = of(false);
  isUserLoggedIn = of(false);
  productAlreadyInWishlist = false;

  return { component: AddToWishListComponent };
};
