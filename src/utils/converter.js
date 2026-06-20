function convertTemperature(value, fromUnit, toUnit) {
  const temp = Number(value);

  if (fromUnit === toUnit) {
    return temp;
  }

  // Celsius
  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") {
      return (temp * 9) / 5 + 32;
    }

    if (toUnit === "Kelvin") {
      return temp + 273.15;
    }
  }

  // Fahrenheit
  if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") {
      return ((temp - 32) * 5) / 9;
    }

    if (toUnit === "Kelvin") {
      return ((temp - 32) * 5) / 9 + 273.15;
    }
  }

  // Kelvin
  if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") {
      return temp - 273.15;
    }

    if (toUnit === "Fahrenheit") {
      return ((temp - 273.15) * 9) / 5 + 32;
    }
  }

  return temp;
}

export function convert(category, value, fromUnit, toUnit, units) {
  if (value === "" || isNaN(value)) {
    return "";
  }

  const numericValue = Number(value);

  // Handle Temperature separately
  if (category === "Temperature") {
    return Number(
      convertTemperature(numericValue, fromUnit, toUnit).toFixed(6),
    );
  }

  // Handle all other categories
  const fromFactor = units[category][fromUnit];
  const toFactor = units[category][toUnit];

  const baseValue = numericValue * fromFactor;

  const result = baseValue / toFactor;

  return Number(result.toFixed(6));
}
