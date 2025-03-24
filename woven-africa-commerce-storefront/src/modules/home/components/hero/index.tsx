import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] border-b border-ui-border-base bg-ui-bg-subtle">
            <Image
                src="/images/hero.png"
                alt="Hero Image"
                fill
                className="object-contain lg:object-cover object-center"
                quality={100}
                priority
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-24 gap-6 bg-black/30">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                    AUTHENTICALLY AFRICAN
                </h1>
            </div>
        </div>
    );
};

export default Hero;
