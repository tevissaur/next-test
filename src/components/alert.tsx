import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  message?: string;
  variant?: string;
  error?: string;
  loading?: boolean;
};

const Alert: React.FC<Props> = ({ message, variant, error, loading }) => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const color =
      (variant === "success" && "bg-green-500/60") ||
      (variant === "error" && "bg-red-500/60") ||
      (variant === "warning" && "bg-orange-500/60") ||
      (variant === "info" && "bg-blue-500/60") ||
      (variant === "dark" && "bg-gray-500/60") ||
      (variant === "light" && "bg-black-500/60") ||
      "bg-white-500/60";
    setBackgroundColor(color);
  });

  return (
    <div
      className={`m-auto my-7 w-full rounded-lg p-6 text-center text-2xl font-bold text-white sm:text-5xl ${backgroundColor}`}
    >
      {loading && (
        <div className="loading p-5 text-center">
          <AiOutlineLoading3Quarters className="m-auto" />
          <span>Loading</span>
        </div>
      )}
      {variant === "error" && <>{error}</>}
    </div>
  );
};

export default Alert;
