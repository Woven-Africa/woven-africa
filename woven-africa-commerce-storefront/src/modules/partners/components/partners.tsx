"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
    "/images/partners/gta.png",
    "/images/partners/mofa.png",
    "/images/partners/dhl.png",
    "/images/partners/ems.jpg",
    "/images/partners/gra.png",
];

const Partners = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white py-6">
            {/* Outer container that ensures no overflow */}
            <div className="mx-auto w-full max-w-6xl px-4 overflow-x-hidden">
                {/* Scrolling container with fixed width */}
                <div className="w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-6 whitespace-nowrap"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                        style={{
                            width: "max-content",
                            display: "flex",
                        }}
                    >
                        {[...partners, ...partners].map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center mx-3"
                            >
                                <Image
                                    src={src}
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className="grayscale transition duration-500 hover:grayscale-0 max-w-[80px] sm:max-w-[100px] md:max-w-[120px]"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Partners;