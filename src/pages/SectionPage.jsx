import { useState } from "react";
import { motion } from "framer-motion";
import IframePage from "../components/IframePage";

export default function SectionPage({ title, items, iframeSrc }) {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div
      className="p-6 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4">{title} Highlights</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 rounded-lg border dark:border-gray-700 w-80 text-gray-800 dark:text-gray-200 dark:bg-gray-800"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="p-4 border rounded-xl dark:border-gray-700 hover:shadow-md transition"
          >
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-3 text-center text-gray-500 dark:text-gray-400">
            No results found.
          </p>
        )}
      </div>
      <a href="https://globbalnews.com " more />


      <IframePage src={iframeSrc} title={title} />
    </motion.div>
  );
}
