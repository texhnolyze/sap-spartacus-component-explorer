import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import {
  HamburgerMenuComponent,
  HamburgerMenuModule,
} from '@spartacus/storefront';

export default {
  title: 'Hamburger Menu',
  decorators: [setupSpartacus([HamburgerMenuModule])],
};

export const Default = () => ({
  component: HamburgerMenuComponent,
  template: `<div style="background: grey"><cx-hamburger-menu></cx-hamburger-menu></div>`,
});
