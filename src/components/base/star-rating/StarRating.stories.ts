import { StarRatingComponent, StarRatingModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Base/StarRating',
  decorators: [setupSpartacus([StarRatingModule])],
};

export const Default = () => ({
  component: StarRatingComponent,
  props: {
    change: action('change'),
  },
});

export const Rating = () => ({
  component: StarRatingComponent,
  props: {
    rating: number('Rating', 3.3),
    change: action('change'),
  },
});

export const Disabled = () => ({
  component: StarRatingComponent,
  props: {
    disabled: true,
    rating: 4,
    change: action('change'),
  },
});
