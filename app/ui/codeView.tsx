"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import CodeInput from "./commons/codeInput";
import { copyToClipboard } from "@/lib/utils";

function CodeView() {
  const [copied, setCopied] = useState(false);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  return (
    <div className="my-8 justify-center">
      <div className="bg-blue-50 rounded-lg p-8 flex flex-col items-center lg:w-[60%] align-middle mx-auto">
        <p className="text-sm font-medium text-blue-700 mb-4">
          Tu código de participación es:
        </p>
        {code && <CodeInput code={code} copyToClipboard={() => copyToClipboard(code, setCopied)} />}

        {copied && (
          <p className="mt-2 text-sm text-green-600">
            ¡Código copiado al portapapeles!
          </p>
        )}
      </div>
      <p className="mt-2 text-center text-sm text-gray-600 my-8">
          Guarda este código, lo necesitarás para participar en el sorteo.
        </p>
    </div>
  );
}

export default CodeView;
