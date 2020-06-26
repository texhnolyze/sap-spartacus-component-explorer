import {setupSpartacus} from "../../spartacusStorybookModuleMetadata";
import {AddedToCartDialogComponent, ModalService} from "@spartacus/storefront";
import {Component, Input, NgModule} from "@angular/core";
import {select, boolean, text} from "@storybook/addon-knobs";

@Component({
  template: `<p>{{ content }}</p>`,
})
class ModalContentComponent {
  @Input()
  content: any
}

@Component({
  template: `<button (click)="openModal()">open modal</button>`,
  providers:  [ ModalService ]
})
class ModalHostComponent {
  modalService: ModalService
  @Input()
  size: any
  @Input()
  centered: boolean
  @Input()
  content: any

  constructor(modalService: ModalService) {
    this.modalService = modalService
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
