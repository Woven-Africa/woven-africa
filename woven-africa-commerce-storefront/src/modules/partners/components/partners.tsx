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
        <div className="py-8 flex justify-center items-center overflow-hidden relative">
            <motion.div
                className="flex items-center gap-10 whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}
                style={{ display: "flex", width: "max-content" }}
            >
                {[...partners, ...partners].map((src, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Image
                            src={src}
                            alt="logo"
                            width={200}
                            height={200}
                            className="filter grayscale transition duration-500 hover:grayscale-0"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Partners;
