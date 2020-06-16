import { PageMetaService } from '@spartacus/core';
import { of } from 'rxjs';
import { text } from '@storybook/addon-knobs';

export const PageMetaServiceProvider = {
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
