import {
  AnonymousConsentDialogComponent,
  AnonymousConsentsDialogModule,
} from '@spartacus/storefront';
import { spartacusWith } from '../../spartacusStorybookModuleMetadata';
import { AnonymousConsentsServiceProvider } from './AnonymousConsentsServiceProvider';
import {
  anonymousConsentsConfig,
  AnonymousConsentsConfigProvider,
} from './AnonymousConsentsConfigProvider';
import { LaunchDialogServiceProvider } from './LaunchDialogServiceProvider';

export default {
  title: 'AnonymousConsentDialog',
  decorators: [
    spartacusWith(
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
