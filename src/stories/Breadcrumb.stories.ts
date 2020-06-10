import {
  BreadcrumbComponent,
  BreadcrumbModule,
  CarouselComponent,
  CmsComponentData,
} from '@spartacus/storefront';
import { spartacusWith } from './globalDecorator';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs';
import { PageMetaService } from '@spartacus/core';
import { of } from 'rxjs';

const cmsComponentProvider = {
  provide: CmsComponentData,
  useClass: class CmsComponentDataMock {},
};
const pageMetaServiceProvider = {
  provide: PageMetaService,
  useClass: class PageMetaServiceMock {
    getMeta() {
      return of({
        breadcrumbs: [
          { label: 'Home', link: '/1' },
          { label: 'Sports & Outdoors', link: '/2' },
          { label: 'Clothing', link: '/3' },
          { label: 'Trousers', link: '/4' },
        ],
        heading: text('heading', 'VAUDE'),
        title: 'VAUDE',
      });
    }
  },
};

export default {
  title: 'Breadcrumb',
  decorators: [
    spartacusWith(
      [BreadcrumbModule],
      [cmsComponentProvider, pageMetaServiceProvider]
    ),
  ],
  component: BreadcrumbComponent,
};

export const Default = () => ({
  component: BreadcrumbComponent,
});
