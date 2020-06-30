import { FormErrorsComponent, FormErrorsModule } from '@spartacus/storefront';
import { setupSpartacus } from '../../../../spartacusStorybookModuleMetadata';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';
import { FormControl } from '@angular/forms';

const control = new FormControl('exampleControl');
control.markAsDirty();
control.setErrors({
  globalMessage: true,
  required: true,
  cxInvalidEmail: true,
  cxInvalidPassword: true,
  cxPasswordsMustMatch: true,
  cxEmailsMustMatch: true,
  cxStarRatingEmpty: true,
  cxNoSelectedItemToCancel: true,
});

export default {
  title: 'Base/FormErrors',
  decorators: [setupSpartacus([FormErrorsModule])],
  component: FormErrorsComponent,
};

export const Default = () => ({
  component: FormErrorsComponent,
  props: {
    control,
  },
});
