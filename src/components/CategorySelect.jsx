
function CategorySelect({
  category,
  categories,
  onCategoryChange,
}) {
  return (
    <div className="flex items-center gap-4">
      <label className="w-24 text-xl font-medium">
        Category :
      </label>

      <select
        value={category}
        onChange={(e) =>
          onCategoryChange(e.target.value)
        }
        className="
        flex-1
        rounded-lg
        border
        border-amber-300
        bg-amber-200
        px-4
        py-3
        "
      >
        {categories.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelect;