function ConvertButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-lg
        bg-amber-800
        px-8
        py-3
        font-semibold
        text-white
        transition
        hover:bg-amber-900
      "
    >
      Convert
    </button>
  );
}

export default ConvertButton;