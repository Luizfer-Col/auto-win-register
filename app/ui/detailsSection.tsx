function DetailsSection() {
  return (
    <div className="mt-8 p-6 bg-gray-50  w-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Detalles del sorteo
      </h3>

      <div className="mb-6">
        <p className="text-base font-medium text-gray-800">Fecha del sorteo</p>
        <p className="mt-1 text-sm text-gray-600">
          15 de diciembre de 2023 a las 19:00 horas
        </p>
      </div>

      <div>
        <p className="text-base font-medium text-gray-800">
          Notificación de ganadores
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Los ganadores serán notificados por correo electrónico y teléfono
          dentro de las 48 horas siguientes al sorteo.
        </p>
      </div>
    </div>
  );
}

export default DetailsSection;
