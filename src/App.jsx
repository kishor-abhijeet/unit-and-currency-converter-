import { useState, useEffect } from "react";
import { convertCurrency } from "./services/currencyApi";
import Header from "./components/Header";
import CategorySelect from "./components/CategorySelect";
import ConverterSection from "./components/ConverterSection";
import SwapButton from "./components/SwapButton";
import ConvertButton from "./components/ConvertButton";
import Footer from "./components/Footer";

import { units } from "./data/units";
import { currencies } from "./data/currencies";
import { convert } from "./utils/converter";

function App() {
  // Available Categories
  const categories = Object.keys(units);

  // State
  const [category, setCategory] = useState("Length");

  const [fromUnit, setFromUnit] = useState(Object.keys(units.Length)[0]);

  const [toUnit, setToUnit] = useState(Object.keys(units.Length)[1]);

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // Available units based on selected category
  const availableUnits =
    category === "Currency" ? currencies : Object.keys(units[category]);

  

  useEffect(() => {
    const unitsForCategory =
      category === "Currency" ? currencies : Object.keys(units[category]);

    setFromUnit(unitsForCategory[0]);
    setToUnit(unitsForCategory[1]);

    setFromValue("");
    setToValue("");
  }, [category]);

  // Convert button handler
  const handleConvert = async () => {
    if(fromValue === "") {
      setToValue("");
      return;
    }
    try {
      if (category === "Currency") {
        const result = await convertCurrency(fromValue, fromUnit, toUnit);
        setToValue(result);
      } else {
        const result = convert(category, fromValue, fromUnit, toUnit, units);

        setToValue(result);
      }
    } catch (error) {
      setToValue("Error");
    }
  };

  // Swap button handler
  const handleSwap = () => {
    // Swap Units
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);

    // Swap Values
    const tempValue = fromValue;
    setFromValue(toValue);
    setToValue(tempValue);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <div className="space-y-8 p-6">
        <CategorySelect
          category={category}
          categories={categories}
          onCategoryChange={setCategory}
        />

        <ConverterSection
          label="From"
          unit={fromUnit}
          units={availableUnits}
          onUnitChange={setFromUnit}
          value={fromValue}
          onValueChange={setFromValue}
        />

        <ConverterSection
          label="To"
          unit={toUnit}
          units={availableUnits}
          onUnitChange={setToUnit}
          value={toValue}
          onValueChange={setToValue}
          readOnly
        />

        <div className="flex justify-between">
          <SwapButton onClick={handleSwap} />
          <ConvertButton onClick={handleConvert} />
        </div>

        <Footer />
      </div>
    </main>
  );
}

export default App;
