import { ItemCounterComponent, ItemCounterModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../spartacusStorybookModuleMetadata';
import { boolean, number } from '@storybook/addon-knobs';
import { FormControl } from '@angular/forms';

export default {
  title: 'ItemCounterComponent',
  decorators: [setupSpartacus([ItemCounterModule])],
  component: ItemCounterComponent,
};

export const Default = () => ({
  component: ItemCounterComponent,
  props: {
    control: new FormControl(5),
    min: number('minimum', 1),
    max: number('maximum', 100),
    step: number('step', 1),
    allowZero: boolean('Allow manual zero input (allowZero)', false),
  },
});

const control = new FormControl(3);
control.disable();
export const Disabled = () => ({
  component: ItemCounterComponent,
  template: `<cx-item-counter [control]="control"></cx-item-counter>`,
  props: { control },
});
