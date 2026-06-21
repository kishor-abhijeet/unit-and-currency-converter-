import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-6 border-t border-gray-300 pt-4 text-center text-sm text-gray-600 ">

      <p>© {new Date().getFullYear()} Abhijeet Kishor</p>

      <div className="mt-2 flex items-center justify-center gap-2">
        <Mail size={16} />
        <a
          href="mailto:abhijeetkishor24@gmail.com"
          className="hover:text-amber-700 hover:underline"
        >
          abhijeetkishor24@gmail.com
        </a>
      </div>

      <div className="mt-5">
        <a
        href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
          Built for Digital Heroes
        </a>
      </div>

    </footer>
  );
}

export default Footer;