import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import {
  CheckoutOrchestratorComponent,
  CheckoutOrchestratorModule,
} from '@spartacus/storefront';

export default {
  title: 'Checkout/CheckoutOrchestrator',
  decorators: [setupSpartacus([CheckoutOrchestratorModule])],
};

export const Default = () => ({
  component: CheckoutOrchestratorComponent,
});
