import {
  PaginationComponent,
  PaginationConfig,
  PaginationModule,
} from '@spartacus/storefront';
import { setupSpartacus } from '../../../spartacusStorybookModuleMetadata';
import { ActivatedRouteProvider } from './ActivatedRouteProvider';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const PaginationConfigProvider = {
  provide: PaginationConfig,
  useClass: class PaginationConfigMock {
    pagination = {
      rangeCount: 4,
      addStart: true,
      addEnd: true,
      addPrevious: true,
      addNext: true,
      addFirst: true,
      addLast: true,
      addDots: true,
    };
  },
};

export default {
  title: 'Pagination',
  component: PaginationComponent,
  decorators: [
    setupSpartacus(
      [PaginationModule],
      [ActivatedRouteProvider, PaginationConfigProvider]
    ),
  ],
};

export const Default = () => ({
  component: PaginationComponent,
  props: {
    viewPageEvent: action('viewPageEvent'),
    pageRoute: text('pageRoute', '/abc/def'),
    queryParam: text('queryParam', 'queryParam'),
    defaultPage: number('defaultPage', 1),
    pagination: {
      currentPage: number('currentPage', 25),
      totalPages: number('totalPages', 100),
    },
  },
});
