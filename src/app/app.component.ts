import { Component, ElementRef } from '@angular/core';
import { Accordion } from './types';
import {
  PERSONAL_FIELDS,
  ADDRESS_FIELDS,
  PAYMENT_FIELDS,
} from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor(private elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  onAccordionHeaderClick(index: number) {
    this.accordions[index].expand = !this.accordions[index].expand;
  }

  accordions: Accordion[] = [
    {
      name: 'Personal Information',
      fields: PERSONAL_FIELDS,
      expand: true,
    },
    {
      name: 'Address',
      fields: ADDRESS_FIELDS,
      expand: true,
    },
    {
      name: 'Credit Card',
      fields: PAYMENT_FIELDS,
      expand: true,
      content: 'Enter your card details: its number, expiration date and the 3-digit number on the back of the card. Please provide the credit card holder name as well.',
    },
  ];
}
