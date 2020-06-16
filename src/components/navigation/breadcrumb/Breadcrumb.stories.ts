import { BreadcrumbComponent, BreadcrumbModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import { PageMetaServiceProvider } from './PageMetaServiceProvider';
import { CmsComponentProvider } from './CmsComponentProvider';

export default {
  title: 'Breadcrumb',
  decorators: [
    setupSpartacus(
      [BreadcrumbModule],
      [CmsComponentProvider, PageMetaServiceProvider]
    ),
  ],
  component: BreadcrumbComponent,
};

export const Default = () => ({
  component: BreadcrumbComponent,
});
