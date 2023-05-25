import { ChangeEventHandler } from 'react';

export interface IFormInputProps {
  id: string;
  label: string;
  autoComplete: string;
  value: string;
  onChange: (v: string) => void;
  inputType?: string;
  required?: boolean;
  readOnly?: boolean;
}

const defaultProps = {
  inputType: 'text',
  required: true,
  readOnly: false,
};

export const FormInput: React.FC<IFormInputProps> = (customProps) => {
  const {
    id,
    label,
    autoComplete,
    value,
    onChange,
    inputType,
    required,
    readOnly,
  } = { ...defaultProps, ...customProps };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 ">
        {label}
      </label>
      <div>
        <input
          type={inputType}
          name={id}
          id={id}
          autoComplete={autoComplete}
          required={required}
          readOnly={readOnly}
          value={value}
          onChange={handleChange}
          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 text-slate-800 ring-inset default:ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-busybusy-300 sm:text-sm sm:leading-6  bg-slate-100 required:white`}
        />
      </div>
    </div>
  );
};

FormInput.displayName = 'FormInput';
