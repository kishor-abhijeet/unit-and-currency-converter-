import UnitDropdown from "./UnitDropdown";
import ValueInput from "./ValueInput";

function ConverterSection({
  label,
  unit,
  units,
  onUnitChange,

  value,
  onValueChange,

  readOnly = false,
}) {
  return (
    <div className="grid grid-cols-[70px_1fr_70px_1fr] gap-4 items-center">

      <label className="text-xl font-medium">
        {label}
      </label>

      <UnitDropdown
        value={unit}
        options={units}
        onChange={onUnitChange}
      />

      <label className="text-xl font-medium">
        Value
      </label>

      <ValueInput
        value={value}
        onChange={onValueChange}
        placeholder="Enter value"
        readOnly={readOnly}
      />

    </div>
  );
}

export default ConverterSection;