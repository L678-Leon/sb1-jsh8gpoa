"use client";

import { motion } from "framer-motion";

function DecorativePaths({ position }: { position: number }) {
    const paths = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        d: `M-${200 - i * 8 * position} -${100 + i * 4}C-${
            200 - i * 8 * position
        } -${100 + i * 4} -${150 - i * 8 * position} ${120 - i * 4} ${
            80 - i * 8 * position
        } ${180 - i * 4}C${320 - i * 8 * position} ${240 - i * 4} ${
            400 - i * 8 * position
        } ${300 - i * 4} ${400 - i * 8 * position} ${300 - i * 4}`,
        opacity: 0.08 + i * 0.02,
        width: 1.5 + i * 0.1,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-gray-600"
                viewBox="0 0 800 400"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Decorative Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity * 1.5}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0.8],
                            opacity: [0, path.opacity * 1.5, path.opacity * 1.2],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: path.id * 0.2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function DecorativePathsBackground() {
    return (
        <div className="absolute inset-0 w-full h-full">
            {/* Multiple layers for depth */}
            <DecorativePaths position={1} />
            <DecorativePaths position={-0.5} />
            <DecorativePaths position={0.8} />
            
            {/* Subtle gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/20 to-gray-200/30 pointer-events-none" />
        </div>
    );
}