import { FieldError } from "react-hook-form";

interface CustomInputProps {
  id: string;
  label: string;
  type: string;
  register: any;
  required?: boolean;
  error?: FieldError;
  pattern?: RegExp;
  classname?: string;
}

const defaultStyle =
  "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm";

function CustomInput({
  id,
  label,
  type,
  register,
  required,
  error,
  pattern,
  classname = defaultStyle,
}: CustomInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          required={required}
          className={classname}
          {...register(id, {
            required: required
              ? { value: true, message: `${label} es requerido` }
              : false,
            pattern: pattern
              ? { value: pattern, message: `Formato inválido para ${label}` }
              : undefined,
          })}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  );
}

export default CustomInput;
