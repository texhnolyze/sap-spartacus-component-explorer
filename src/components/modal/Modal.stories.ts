import {setupSpartacus} from "../../spartacusStorybookModuleMetadata";
import { ModalService} from "@spartacus/storefront";
import {Component, Input, NgModule} from "@angular/core";
import {select, boolean, text} from "@storybook/addon-knobs";

@Component({
  template: `<div><button (click)="dismissModal()">X</button><p>{{ content }}</p></div>`,
})
class ModalContentComponent {
  @Input()
  content: any

  constructor( protected modalService: ModalService,) {
  }

  dismissModal(): void {
    this.modalService.dismissActiveModal('a');
  }
}

@Component({
  template: `<button (click)="openModal()">open modal</button>`,
})
class ModalHostComponent {
  @Input()
  size: any
  @Input()
  centered: boolean
  @Input()
  content: any

  constructor(protected modalService: ModalService) {
  }

  openModal() {
    const modalRef = this.modalService.open(ModalContentComponent, {
      centered: this.centered,
      size: this.size,
    });
    const modalInstance = modalRef.componentInstance;
    modalInstance.content = this.content
  }
}

@NgModule({
  providers: [
    ModalService,
  ],
  declarations: [
    ModalHostComponent,
    ModalContentComponent
  ],
  entryComponents: [ModalContentComponent],
})
class ModalHostModule {}

export default {
  title: 'Modal',
  decorators: [setupSpartacus([ModalHostModule], [])],
};

export const Default = () => ({
  component: ModalHostComponent,
  props: {
    size: select('size', ['sm', 'lg', 'xl'], 'lg'),
    centered: boolean('centered', true),
    content: text('content', 'This is the modal content')
  }
})
