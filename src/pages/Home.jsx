import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div
      className="p-6 text-center dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Globbal News ���</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Your central hub for breaking news, trending blogs, sports, entertainment, and shopping — all in one portal.
      </p>
    </motion.div>
  );
}
