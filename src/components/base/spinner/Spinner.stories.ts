import { SpinnerComponent, SpinnerModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';

export default {
  title: 'Base/Spinner',
  decorators: [setupSpartacus([SpinnerModule])],
};

export const Default = () => ({
  component: SpinnerComponent,
});
