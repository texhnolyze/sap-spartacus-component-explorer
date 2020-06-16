import {
  FooterNavigationComponent,
  FooterNavigationModule,
  PageLayoutModule,
} from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import { NavigationServiceProvider } from './NavigationServiceProvider';
import { CmsComponentProvider } from './CmsComponentProvider';

export default {
  title: 'FooterNavigation',
  decorators: [
    setupSpartacus(
      [FooterNavigationModule, PageLayoutModule],
      [CmsComponentProvider, NavigationServiceProvider]
    ),
  ],
  component: FooterNavigationComponent,
};

export const Default = () => ({
  component: FooterNavigationComponent,
  template: `
    <cx-page-layout section="footer" class="footer">
      <div class="Footer has-components">
         <cx-footer-navigation></cx-footer-navigation>
      </div>
    </cx-page-layout>
  `,
});
