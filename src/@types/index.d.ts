export type EntryType = 'text' | 'number' | 'date';

export type InputType = { type: EntryType, min?: number, max?: number, required?: boolean, label?: string, placeholder?: string, value: string, change: (ChangeEvent) => void  };

export type OptionType = { value: string, text: string, disabled?: boolean, selected?: boolean };

export type SelectType = { name: string, options: OptionType[], required?: boolean, value: string, change: (ChangeEvent) => void };

export type FormItemType = { type: EntryType | 'select', body: InputType | SelectType };

export type SubmitType = { text: string, action: () => void };

export type FormType = { items: FormItemType[], submit: SubmitType };
