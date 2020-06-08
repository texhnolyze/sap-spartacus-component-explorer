import { CardComponent, CardModule, ICON_TYPE } from '@spartacus/storefront';
import { spartacusWith } from './globalDecorator';

export default {
  title: 'CardComponent',
  decorators: [spartacusWith([CardModule])],
  component: CardComponent,
};

export const Default = () => ({
  component: CardComponent,
  props: {
    content: {
      header: 'Header',
      deleteMsg: 'deleteMsg',
      title: 'Title',
      textBold: 'TextBold',
      text: ['line1', 'line2', 'line3'],
      img: ICON_TYPE.CREDIT_CARD,
    },
  },
});
