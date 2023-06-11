export interface Question {
  id: string;
  type: string;
  label: string;
  validators: any[];
  options?: { value: string; label: string }[];
}

export interface FormSchema {
  title: string;
  version: string;
  questions: Question[];
}

export const myForm: FormSchema = {
  title: 'My Form',
  version: '1.0.0',
  questions: [
    {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      validators: [],
    },
    {
      id: 'age',
      label: 'Age',
      type: 'number',
      validators: [],
    },
    {
      id: 'gender',
      label: 'Gender',
      type: 'single-select',
      validators: [],
      options: [
        {
          label: 'Male',
          value: 'M',
        },
        {
          label: 'Female',
          value: 'F',
        },
      ],
    },
    {
      id: 'county',
      label: 'County',
      type: 'single-select',
      validators: [],
      options: [
        {
          label: 'Nairobi',
          value: 'Nbi',
        },
        {
          label: 'UasinGishu',
          value: 'UG',
        },
      ],
    },
  ],
};
