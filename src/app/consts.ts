import { Field, RenderPosition } from './types';

export const PERSONAL_FIELDS: Field[] = [
  {
    name: 'text',
    label: 'First Name',
  },
  {
    name: 'text',
    label: 'Last Name',
  },
  {
    name: 'email',
    label: 'E-mail',
  },
  {
    name: 'tel',
    label: 'Phone Number',
  },
];

export const ADDRESS_FIELDS: Field[] = [
  {
    name: 'text',
    label: 'Street',
  },
  {
    name: 'text',
    label: 'House Number',
    placeholder: 'House Nr.',
    halfWidth: true,
    renderPosition: RenderPosition.Left,
  },
  {
    name: 'text',
    label: 'Zip Code',
    halfWidth: true,
    renderPosition: RenderPosition.Right,
  },
  {
    name: 'text',
    label: 'City Name',
  },
  {
    name: 'text',
    label: 'Country',
  },
];

export const PAYMENT_FIELDS: Field[] = [
  {
    name: 'tel',
    label: 'Credit Card Number',
    type: 'numeric',
  },
  {
    name: 'month',
    label: 'Expiry Date',
    halfWidth: true,
    renderPosition: RenderPosition.Left,
  },
  {
    name: 'password',
    label: 'CVV',
    halfWidth: true,
    renderPosition: RenderPosition.Right,
    type: 'numeric',
  },
  {
    name: 'text',
    label: 'City Name',
  },
  {
    name: 'text',
    label: 'Card Holder Name',
  },
];
