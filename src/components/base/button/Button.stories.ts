import { text } from '@storybook/addon-knobs';
import { action as logAction } from '@storybook/addon-actions';

const props = () => ({
  btnText: text('text', 'Add to cart'),
  click: logAction('button clicked'),
});

export default {
  title: 'Base/Button',
};

export const primary = () => ({
  props: props(),
  template: `<button type="submit" (click)="click($event)" class="btn btn-primary">{{btnText}}</button>`,
});

export const secondary = () => ({
  props: props(),
  template: `<button (click)="click($event)" class="btn btn-secondary">{{btnText}}</button>`,
});

export const action = () => ({
  props: props(),
  template: `<button (click)="click($event)" class="btn btn-action">{{btnText}}</button>`,
});

export const disabled = () => ({
  props: props(),
  template: `
    <button (click)="click($event)" class="btn btn-primary disabled">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-secondary disabled ">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-action disabled">{{btnText}}</button>
`,
});

export const block = () => ({
  props: props(),
  template: `
    <button (click)="click($event)" class="btn btn-primary btn-block">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-secondary btn-block ">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-action btn-block">{{btnText}}</button>
`,
});

export const all = () => ({
  props: props(),
  template: `
    <button (click)="click($event)" class="btn btn-primary">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-secondary">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-success">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-danger">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-warning">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-info">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-light">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-dark">{{btnText}}</button>
    <button (click)="click($event)" class="btn btn-link">{{btnText}}</button>
`,
});
