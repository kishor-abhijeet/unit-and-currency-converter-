import { ArrowLeftRight, Settings } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-amber-700 p-2 text-white">
          <ArrowLeftRight size={24} />
        </div>

        <h1 className="text-3xl font-bold text-amber-900">
          Unit & Currency Converter
        </h1>
      </div>

      <button className="transition hover:rotate-90">
        <Settings size={30} />
      </button>
    </header>
  );
}

export default Header;