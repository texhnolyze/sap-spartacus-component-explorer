import { B2cStorefrontModule } from '@spartacus/storefront';
import { APP_BASE_HREF } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';

export const spartacusWith = (modules) =>
  moduleMetadata({
    imports: [
      RouterModule.forRoot([], {
        initialNavigation: 'disabled',
      }),
      B2cStorefrontModule.withConfig({
        backend: {
          occ: {
            baseUrl: process.env.STORYBOOK_OCC_BASEURL,
            prefix: '/rest/v2/',
          },
        },
      }),
      ...modules,
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: '/',
      },
    ],
  });
