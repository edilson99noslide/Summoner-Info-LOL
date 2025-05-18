export type InputType = 'text' | 'password' | 'textarea' | 'number';

export interface CommonInput {
  label: string;
  type?: InputType;
  placeholder?: string;
}

export interface CommonInputWithModel extends CommonInput {
  modelValue: string;
}