import { SortingComponent } from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import { object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Sorting',
  decorators: [setupSpartacus([])],
};

export const Default = () => ({
  component: SortingComponent,
  props: {
    sortOptions: object('sortOptions', [
      { code: '1', selected: false },
      { code: '2', selected: false },
      { code: '3', name: 'Three', selected: true },
      { code: '4', name: 'Four', selected: false },
      { code: '5', name: 'Five', selected: false },
    ]),
    selectedOption: '3',
    placeholder: text('placeholder', 'Placeholder'),
    sortLabels: {
      1: 'One',
      2: 'Two',
    },
    sortListEvent: action('sortListEvent'),
  },
});

export const NoPreselection = () => ({
  component: SortingComponent,
  props: {
    sortOptions: object('sortOptions', [
      { code: '1', name: 'One', selected: false },
      { code: '2', name: 'Two', selected: false },
    ]),
    placeholder: text('placeholder', 'Placeholder'),
  },
});

export const Empty = () => ({
  component: SortingComponent,
  props: {
    sortOptions: object('sortOptions', []),
    placeholder: text('placeholder', 'Placeholder'),
  },
});
