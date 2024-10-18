import { useRouter } from "next/navigation";
import CodeView from "./codeView";
import CustomButton from "./commons/customButton";
import DetailsSection from "./detailsSection";

function ConfirmSection() {
  const router = useRouter();
  const handleNavigateHome = () => {
    router.replace("/");
  };
  return (
    <div className="flex flex-col">
      <div className="text-center my-6">
        <h2 className="mt-10 text-4xl font-extrabold text-gray-900">
          ¡Registro completado!
        </h2>
      </div>
      <CodeView />
      <div className="rounded-lg flex flex-col items-center w-[60%] lg:w-[40%] align-middle mx-auto">
        <CustomButton
          text="Finalizar"
          type="button"
          action={handleNavigateHome}
        />
      </div>
      <DetailsSection />
    </div>
  );
}

export default ConfirmSection;
