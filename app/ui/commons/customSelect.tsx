import React from "react";
import { FieldError } from "react-hook-form";
interface CustomSelectProps {
  id: string;
  label: string;
  options: string[];
  register: any;
  required?: boolean;
  error?: FieldError;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

function CustomSelect({
  id,
  label,
  options,
  register,
  required,
  error,
  onChange,
  disabled = false,
}: CustomSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative">
        <select
          id={id}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          {...register(id, {
            required: required ? { value: true, message: `${label} es requerido` } : false,
          })}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="">Selecciona una opción</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </div>
    </div>
  );
}

export default CustomSelect;
