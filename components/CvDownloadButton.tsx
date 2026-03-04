"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

export default function CvDownloadButton() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {showHint && (
        <div className="mb-1 px-2 py-2 text-[10px] bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg animate-bounce">
          Download my Resume 👇
        </div>
      )}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <a
          href="/Usman-Ali-FullStack-CV.pdf"
          download
          className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center 
        hover:scale-110 duration-300 transition"
        >
          <FontAwesomeIcon icon={faFileAlt} className="text-white text-md" />
        </a>
      </motion.div>
    </div>
  );
}
