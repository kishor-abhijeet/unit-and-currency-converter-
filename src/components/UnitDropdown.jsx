function UnitDropdown({
  value,
  options = [],
  onChange,
}) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="
      w-full
      rounded-lg
      border
      border-amber-300
      bg-amber-200
      px-3
      py-3
      "
    >
      {options.map((unit) => (
        <option
          key={unit}
          value={unit}
        >
          {unit}
        </option>
      ))}
    </select>
  );
}

export default UnitDropdown;