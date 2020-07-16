import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { PlaceOrderComponent, PlaceOrderModule } from '@spartacus/storefront';

export default {
  title: 'Checkout/PlaceOrder',
  decorators: [setupSpartacus([PlaceOrderModule])],
};

export const Default = () => ({
  component: PlaceOrderComponent,
});
