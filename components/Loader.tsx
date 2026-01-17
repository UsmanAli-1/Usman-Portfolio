"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-900/30 to-pink-900/20 backdrop-blur-lg ">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/icon.png" 
          alt="Wearify"
          width={120}
          height={120}
          priority
        />
      </motion.div>
    </div>
  );
}
