// import Image from "next/image";
//
// const Hero = () => {
//     return (
//         <div className="relative w-full h-[90vh] border-b border-ui-border-base bg-ui-bg-subtle">
//             <Image
//                 src="/images/hero.png"
//                 alt="Hero Image"
//                 fill
//                 className="object-contain lg:object-cover object-center"
//                 quality={100}
//                 priority
//             />
//             <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 gap-6 bg-black/30">
//                 <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
//                     AUTHENTICALLY AFRICAN
//                 </h1>
//             </div>
//         </div>
//     );
// };
//
// export default Hero;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] border-b border-ui-border-base bg-ui-bg-subtle">
            <Image
                src="/images/hero.png"
                alt="Hero Image"
                fill
                className="object-cover object-center"
                quality={100}
                priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 gap-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    AUTHENTICALLY AFRICAN
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-200 max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Celebrating culture, craftsmanship, and heritage through fashion.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.a
                    href="/shop"
                    className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Shop Now
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
