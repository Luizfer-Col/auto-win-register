"use client";

import { citiesByDepartment, departments } from "@/lib/data";
import { FormData, QueryData } from "@/lib/definitions";
import { generateAlphanumericCode } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomButton from "./commons/customButton";
import CustomCheck from "./commons/customCheck";
import CustomInput from "./commons/customInput";
import CustomSelect from "./commons/customSelect";

function RegisterForm() {
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<FormData>({
    mode: "onBlur",
  });
  const router = useRouter(); 

  const handleNavigate = () => {
    const code = generateAlphanumericCode(8);
    const data: QueryData = { code };
    const queryString = new URLSearchParams(data).toString();
    router.push(`/confirmation?${queryString}`);
  };

  const onSubmit = () => handleNavigate();

  return (
    <div className="px-4 py-8 sm:px-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Completa tus datos y ¡buena suerte!
      </h2>
      <form
        className="space-y-6 max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <CustomInput
          id="name"
          label="Nombre"
          type="text"
          register={register}
          required
          error={errors.name}
          pattern={/^[A-Za-z]+$/i}
        />
        <CustomInput
          id="lastname"
          label="Apellido"
          type="text"
          register={register}
          required
          error={errors.lastname}
          pattern={/^[A-Za-z]+$/i}
        />
        <CustomInput
          id="cedula"
          label="Cédula"
          type="text"
          register={register}
          required
          error={errors.cedula}
          pattern={/^[0-9]+$/}
        />

        <CustomInput
          id="phone"
          label="Celular"
          type="text"
          register={register}
          required
          error={errors.phone}
          pattern={/^[0-9]+$/}
        />

        <CustomInput
          id="email"
          label="Email"
          type="text"
          register={register}
          required
          error={errors.email}
          pattern={/\S+@\S+\.\S+/}
        />

        <CustomSelect
          id="department"
          label="Departamento"
          options={departments}
          register={register}
          required
          error={errors.department}
          onChange={(e) => {
            setSelectedDepartamento(e.target.value);
            if (e.target.value === "") {
              setError("department", {
                type: "required",
                message: "El departamento es requerido",
              });
            } else {
              clearErrors("department");
            }
          }}
        />

        <CustomSelect
          id="city"
          label="Ciudad"
          options={
            selectedDepartamento ? citiesByDepartment[selectedDepartamento] : []
          }
          register={register}
          required
          error={errors.city}
          onChange={(e) => {
            if (e.target.value === "") {
              setError("city", {
                type: "required",
                message: "La ciudad es requerida",
              });
            } else {
              clearErrors("city");
            }
          }}
        />

        <CustomCheck
          id="policy"
          label="Autorizo el tratamiento de mis datos de acuerdo con la
          finalidad establecida en la política de protección de datos
          personales"
          type="check"
          register={register}
          required
          error={errors.policy}
        />

        <CustomButton type="submit" text="¡Quiero participar!" />
      </form>
    </div>
  );
}

export default RegisterForm;
