interface CustomButtonProps {
  type: "submit" | "reset" | "button";
  text: string;
  className?: string;
  action?: () => void;
}
const defaultStyle =
  "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105";
  
function CustomButton({
  type,
  text,
  className = defaultStyle,
  action
}: CustomButtonProps) {
  return (
    <button type={type} className={className}
    onClick={action}
    >
      {text}
    </button>
  );
}

export default CustomButton;
