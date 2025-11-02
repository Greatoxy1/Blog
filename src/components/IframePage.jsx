import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function IframePage({ src, title }) {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className="relative p-2 h-[90vh] dark:bg-gray-900"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 z-10">
          <div className="flex flex-col items-center">
            <ClipLoader size={40} color="#facc15" />
            <p className="mt-2 text-gray-600 dark:text-gray-300">Loading {title}...</p>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
        className="w-full h-full rounded-2xl border shadow-md dark:border-gray-700"
      ></iframe>
    </motion.div>
  );
}
