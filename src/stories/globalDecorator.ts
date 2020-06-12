import { B2cStorefrontModule } from '@spartacus/storefront';
import { APP_BASE_HREF } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';

export const spartacusWith = (modules, providers = []) =>
  moduleMetadata({
    imports: [
      RouterModule.forRoot([], {
        initialNavigation: 'disabled',
      }),
      B2cStorefrontModule.withConfig({
        backend: {
          occ: {
            baseUrl:
              'https://api.c39j2-walkersde1-d3-public.model-t.cc.commerce.ondemand.com',
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
      ...providers,
    ],
  });
