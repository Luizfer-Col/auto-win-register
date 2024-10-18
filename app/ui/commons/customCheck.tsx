import { FieldError } from "react-hook-form";

interface CustomCheckProps {
  id: string;
  label: string;
  type: string;
  register: any;
  required?: boolean;
  error?: FieldError;
  classname?: string;
}

const defaultStyle =
  "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded";

function CustomCheck({
  id,
  label,
  register,
  required,
  error,
  classname = defaultStyle,
}: CustomCheckProps) {
  return (
    <div>
      <div className="flex items-start">
        <input
          id={id}
          type="checkbox"
          className={classname}
          {...register(id, {
            required: required
              ? { value: true, message: `${label} es requerido` }
              : false,
          })}
        />
        <label htmlFor="terminos" className="ml-2 block text-sm text-gray-900">
          Autorizo el tratamiento de mis datos de acuerdo con la finalidad
          establecida en la política de protección de datos personales
        </label>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">
          Debes aceptar los términos para continuar
        </p>
      )}
    </div>
  );
}

export default CustomCheck;
