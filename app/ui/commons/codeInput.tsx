import Image from "next/image";

interface CodeInputProps {
  code: string;
  copyToClipboard: () => void;
}

function CodeInput({ code, copyToClipboard }: CodeInputProps) {
  return (
    <div className="bg-white px-4 py-2 rounded-md border-2 border-blue-300 flex items-center justify-between w-full max-w-md">
      <span className="text-2xl font-bold text-blue-700">{code}</span>
      <button
        onClick={copyToClipboard}
        className="ml-2 p-2 text-blue-600 hover:text-blue-800 focus:outline-none"
        aria-label="Copiar código"
      >
        <Image
          src="/icons/icon_copy.svg"
          alt="Icono de copiar"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default CodeInput;
