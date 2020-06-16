import {
  AnonymousConsentDialogComponent,
  AnonymousConsentsDialogModule,
} from '@spartacus/storefront';
import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { AnonymousConsentsServiceProvider } from './AnonymousConsentsServiceProvider';
import {
  anonymousConsentsConfig,
  AnonymousConsentsConfigProvider,
} from './AnonymousConsentsConfigProvider';
import { LaunchDialogServiceProvider } from './LaunchDialogServiceProvider';

export default {
  title: 'AnonymousConsentDialog',
  decorators: [
    setupSpartacus(
      [AnonymousConsentsDialogModule],
      [
        AnonymousConsentsConfigProvider,
        AnonymousConsentsServiceProvider,
        LaunchDialogServiceProvider,
      ]
    ),
  ],
  component: AnonymousConsentDialogComponent,
};

export const Default = () => {
  anonymousConsentsConfig.showLegalDescriptionInDialog = true;
  return {
    component: AnonymousConsentDialogComponent,
  };
};

export const NoLegalDescription = () => {
  anonymousConsentsConfig.showLegalDescriptionInDialog = false;
  return {
    component: AnonymousConsentDialogComponent,
  };
};
