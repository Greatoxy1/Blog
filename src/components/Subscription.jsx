import { useState } from "react";
import { motion } from "framer-motion";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate success (replace with real API later)
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.div
      className="bg-gray-900 text-white dark:bg-gray-800 mt-12 py-10 px-6 rounded-2xl shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold mb-3">Subscribe to Globbal News</h2>
          <a href="https://globbalnews.com " more />

          <p className="text-gray-400 mb-6">Get the latest headlines, stories, and updates — straight to your inbox.</p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-600 w-64 text-gray-800 dark:text-gray-200 dark:bg-gray-900"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-green-400">
            🎉 You're subscribed!
          </h3>
          <p className="text-gray-400">
            Thank you for joining the Globbal News community.
            <a href="https://globbalnews.com " more />

          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
