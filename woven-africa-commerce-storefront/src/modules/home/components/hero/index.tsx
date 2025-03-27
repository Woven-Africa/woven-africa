"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(false); // Trigger exit animation
            setTimeout(() => {
                setShowText(true); // Show text again after a short delay
            }, 500);
        }, 5000); // Repeat every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[90vh] overflow-hidden border-b border-ui-border-base bg-ui-bg-subtle">

            {/* Parallax Animated Background */}
            <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image
                    src="/images/hero.png"
                    alt="Hero Image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                    priority
                />
            </motion.div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 gap-6 bg-black/30">

                {/* Fading Text Animation */}
                <AnimatePresence mode="wait">
                    {showText && (
                        <motion.div
                            key="hero-text"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1 }}
                            className="flex flex-col items-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                                AUTHENTICALLY AFRICAN
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-2">
                                Celebrating culture, craftsmanship, and heritage through fashion
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Glowing Button with Floating Effect */}
                <motion.a
                    href="/stole-customizer"
                    className="px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-lg hover:bg-gray-200 transition relative"
                    animate={{
                        scale: [1, 1.05, 1], // Subtle pulse effect
                        y: [0, -5, 0], // Floating up & down
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}
                    whileHover={{
                        boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)", // Glow effect
                        scale: 1.1, // Slight scale on hover
                    }}
                >
                    Shop Now
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
