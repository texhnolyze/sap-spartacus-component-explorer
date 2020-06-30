import { SkipLinkComponent, SkipLinkModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';

export default {
  title: 'Base/SkipLink',
  decorators: [setupSpartacus([SkipLinkModule])],
};

export const Default = () => {
  return {
    component: SkipLinkComponent,
  };
};
