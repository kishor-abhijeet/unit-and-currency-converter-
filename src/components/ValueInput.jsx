function ValueInput({
  value,
  onChange,
  placeholder,
  readOnly = false,
}) {
  return (
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      onChange={(e) => onChange(e.target.value)}
      className="
      w-full
      rounded-lg
      border
      border-amber-300
      bg-amber-200
      px-3
      py-3
      outline-none
      "
    />
  );
}

export default ValueInput;