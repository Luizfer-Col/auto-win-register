import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative h-64 sm:h-80 lg:h-96">
      <Image
        src="/images/hero.jpg"
        alt="Accesorios de auto"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center">
          ¡Gana un bono de hasta $5,000,000!
        </h1>
        <p className="mt-2 text-xl sm:text-2xl text-gray-200 text-center">
          Redimible en la compra de un auto, repuestos o accesorios *
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
