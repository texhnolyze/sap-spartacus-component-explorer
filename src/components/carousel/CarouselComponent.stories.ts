import { CarouselComponent, CarouselModule } from '@spartacus/storefront';
import { of } from 'rxjs';
import { spartacusWith } from '../../spartacusStorybookModuleMetadata';

export default {
  title: 'CarouselComponent',
  decorators: [spartacusWith([CarouselModule])],
  component: CarouselComponent,
};

export const Default = () => ({
  component: CarouselComponent,
  template: `
    <cx-carousel
    [items]="items"
    [title]="title"
    [template]="template"
    itemWidth="200px"></cx-carousel>
    <ng-template #template let-item="item"><img [src]="item.url"/></ng-template>
  `,
  props: {
    title: 'Top 10 most beautiful chairs',
    items: [
      of({ url: 'https://loremflickr.com/200/200/chair?cb=1' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=2' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=3' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=4' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=5' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=6' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=7' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=8' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=9' }),
      of({ url: 'https://loremflickr.com/200/200/chair?cb=10' }),
    ],
  },
});
