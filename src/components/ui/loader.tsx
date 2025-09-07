
export function Loader({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-5 h-5 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className={`${sizeClasses[size]} rounded-full border-t-[oklch(0.623_0.214_259.815)] border-gray-200 animate-spin`}
      ></div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50">
      <Loader size="large" />
    </div>
  );
}
