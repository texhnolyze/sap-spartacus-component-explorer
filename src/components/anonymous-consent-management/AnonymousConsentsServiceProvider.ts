import { AnonymousConsentsService } from '@spartacus/core';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

export const AnonymousConsentsServiceProvider = {
  provide: AnonymousConsentsService,
  useClass: class AnonymousConsentsServiceMock {
    isBannerVisible = () => of(true);
    giveAllConsents = (...args) => {
      action('AnonymousConsentsService.giveAllConsents')(...args);
      return of(true);
    };
    toggleBannerDismissed = action(
      'AnonymousConsentsService.toggleBannerDismissed'
    );
    getTemplates() {
      return of([
        {
          description:
            'This is a sample marketing consent description that will need to be updated or replaced, based on the valid registration consent required.',
          id: 'MARKETING_NEWSLETTER',
          name: 'I approve to this sample MARKETING consent',
          version: 0,
        },
        {
          description:
            'We would like to store your browsing behaviour so that our website can dynamically present you with a personalised browsing experience and our customer support agents can provide you with contextual customer support.',
          id: 'PROFILE',
          name: 'Allow SAP Commerce Cloud, Context-Driven Services tracking',
          version: 0,
        },
        {
          description:
            'This is a sample store user information consent description that will need to be updated or replaced.',
          id: 'STORE_USER_INFORMATION',
          name: 'I approve to this sample STORE USER INFORMATION consent',
          version: 0,
        },
      ]);
    }

    getConsents() {
      return of([
        {
          templateCode: 'MARKETING_NEWSLETTER',
          version: '0',
          consentState: 'GIVEN',
        },
        {
          templateCode: 'PROFILE',
          version: '0',
        },
        {
          templateCode: 'STORE_USER_INFORMATION',
          version: '0',
          consentState: 'GIVEN',
        },
      ]);
    }

    getLoadTemplatesLoading() {
      return of(false);
    }

    giveConsent = action('giveConsent');

    isConsentGiven() {
      return true;
    }

    isConsentWithdrawn() {
      return false;
    }

    withdrawConsent = action('withdrawConsent');
  },
};
