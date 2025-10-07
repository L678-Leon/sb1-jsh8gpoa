"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Scales & Software <br /> (K) Ltd
      </motion.h1>
      
      {/* Back left positioned text with gaps */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1.0,
          duration: 1.0,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
      >
        <div className="space-y-8">
          <div className="h-8"></div> {/* Gap */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-lg md:text-3xl font-medium text-slate-300 whitespace-nowrap"
          >
            Precision Weighing Solutions Excellence
          </motion.h2>
          <div className="h-8"></div> {/* Gap */}
        </div>
      </motion.div>
    </LampContainer>
  );
}