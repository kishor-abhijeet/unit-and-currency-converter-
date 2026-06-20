function SwapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-lg
        bg-amber-800
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-amber-900
      "
    >
      Swap
    </button>
  );
}

export default SwapButton;