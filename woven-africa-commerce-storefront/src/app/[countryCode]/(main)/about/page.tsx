import Image from "next/image";

const About = () => {
    return (
        <div className="relative w-full min-h-screen bg-gray-100 text-gray-900">
            {/* Our Legacy */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold">Our Legacy</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    At <strong>WovenAfrica</strong>, we are more than just a textile company—we are custodians of a rich heritage. As a three-generation family enterprise, our journey has been one of resilience, craftsmanship, and innovation.
                </p>
                <p className="mt-4 text-lg">
                    Much like the intricate weave of Kente, our story is one of growth, adaptation, and perseverance. Through challenges, including fires that threatened our legacy, we have remained steadfast in preserving the art of authentic Kente weaving while embracing modern technology.
                </p>
            </section>

            {/* Bonwire Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center bg-gray-200">
                <h2 className="text-3xl font-semibold">Bonwire: The Heart of Kente</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    The story of Kente originates from <strong>Bonwire</strong>, an Ashanti town known for its deep-rooted weaving traditions. Inspired by a spider’s web, two men from Bonwire pioneered the intricate weaving technique that gave birth to the iconic Kente fabric.
                </p>
                <p className="mt-4 text-lg">
                    Today, Bonwire remains home to Ghana’s most skilled artisans, many of whom are part of the WovenAfrica family. Each piece of Kente we produce carries centuries of tradition, symbolism, and craftsmanship.
                </p>
            </section>

            {/* Customization & Global Reach */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold">Expanding Our Customization & Global Reach</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    We have expanded our range of customizable Kente patterns, allowing customers to personalize traditional Ashanti designs. Our digital customization tool enables customers worldwide to design and order Kente fabric online, bridging the gap between tradition and technology.
                </p>
                <p className="mt-4 text-lg">
                    In alignment with the African Continental Free Trade Area (AfCFTA), our website supports multi-currency payments, making our products more accessible across Africa and beyond.
                </p>
            </section>

            {/* Impact Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center bg-gray-200">
                <h2 className="text-3xl font-semibold">Our Impact</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    At <strong>WovenAfrica</strong>, we believe in empowering artisans and fostering sustainable growth. As a social enterprise, we are committed to:
                </p>
                <ul className="mt-6 text-lg text-left list-disc list-inside">
                    <li>Providing employment opportunities for local weavers and artisans.</li>
                    <li>Training and upskilling employees to keep up with modern industry demands.</li>
                    <li>Leveraging AfCFTA to expand the reach of Ghanaian textiles across Africa and beyond.</li>
                </ul>
            </section>

            {/* Join Us */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold">Join Us</h2>
                <p className="mt-4 text-lg leading-relaxed">
                    Be part of this journey. Wear history. Shape the future.
                </p>
                <a
                    href="/shop"
                    className="mt-6 inline-block px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:bg-gray-800 transition"
                >
                    Explore Our Collection
                </a>
            </section>
        </div>
    );
};

export default About;
