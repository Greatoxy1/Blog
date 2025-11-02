import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/news", label: "News" },
    { to: "/blog", label: "Blog" },
    { to: "/sports", label: "Sports" },
    { to: "/shop", label: "Shop" },
    { to: "/entertainment", label: "Entertainment" },
  ];

  return (
    <nav className="bg-gray-900 text-white dark:bg-gray-800 p-4 flex flex-wrap gap-4 justify-center items-center">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="hover:text-yellow-400 transition"
        >
          {link.label}
        </Link>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 border rounded-lg px-3 py-1 text-sm hover:bg-gray-700"
      >
        {darkMode ? "í¼ž Light" : "í¼™ Dark"}
      </button>
    </nav>
  );
}
