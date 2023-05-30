export enum RenderPosition {
  Right = 'right',
  Left = 'left',
}

export interface Field {
  name: string;
  label: string;
  placeholder?: string;
  halfWidth?: boolean;
  renderPosition?: RenderPosition;
  type?: string;
}

export interface Accordion {
  name: string;
  fields: Field[];
  expand: boolean;
  content?: string;
}
