import {
  FooterNavigationComponent,
  PageLayoutModule,
  FooterNavigationModule,
  CmsComponentData,
  NavigationService,
} from '@spartacus/storefront';
import { spartacusWith } from '../../../spartacusStorybookModuleMetadata';
import { text, boolean, object } from '@storybook/addon-knobs';
import { of } from 'rxjs';

const cmsComponentProvider = {
  provide: CmsComponentData,
  useClass: class CmsComponentDataMock {
    data$ = of({
      styleClass: 'styleClass',
    });
  },
};
const navigationServiceProvider = {
  provide: NavigationService,
  useClass: class NavigationServiceMock {
    getNavigationNode() {
      return of({
        children: [
          {
            title: 'Get to Know Us',
            children: [
              { title: 'Careers', url: '/' },
              { title: 'Press Releases', url: '/' },
              { title: 'About us', url: '/' },
              { title: 'Blog', url: '/' },
            ],
          },
          {
            title: 'Payment Methods',
            children: [
              { title: 'Shop with points', url: '/' },
              { title: 'Credit Card', url: '/' },
              { title: 'Payment by Invoice', url: '/' },
              { title: 'Direct Debit', url: '/' },
            ],
          },
          {
            title: 'Let Us Help You',
            children: [
              { title: 'Track Packages or View Orders', url: '/' },
              { title: 'Customer Service', url: '/' },
              { title: 'Delivery Rates & Policies', url: '/' },
              { title: 'Returns & Replacements', url: '/' },
            ],
          },
        ],
        title: 'title',
      });
    }
  },
};

export default {
  title: 'FooterNavigation',
  decorators: [
    spartacusWith(
      [FooterNavigationModule, PageLayoutModule],
      [cmsComponentProvider, navigationServiceProvider]
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
