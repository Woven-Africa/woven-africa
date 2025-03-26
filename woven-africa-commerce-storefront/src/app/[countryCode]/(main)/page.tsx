// import { Metadata } from "next"
//
// import FeaturedProducts from "@modules/home/components/featured-products"
// import Hero from "@modules/home/components/hero"
// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"
// import Image from "next/image"
// import CustomButton from "@modules/common/components/custom-button";
//
// export const metadata: Metadata = {
//   title: "Woven Africa",
//   description:
//     "Redefining Kente ownership globally",
// }
//
// export default async function Home(props: {
//   params: Promise<{ countryCode: string }>
// }) {
//   const params = await props.params
//
//   const { countryCode } = params
//
//   const region = await getRegion(countryCode)
//
//   const { collections } = await listCollections({
//     fields: "id, handle, title",
//   })
//
//   if (!collections || !region) {
//     return null
//   }
//
//   return (
//     <>
//       <Hero />
//       <section className="container mx-auto flex flex-1 gap-24 py-24 justify-center items-center text-center">
//         <Image src="/images/hero_img_2.jpeg" alt="image of girl" width={400} height={400} />
//         <div className="flex flex-col items-center text-center justify-center">
//           <h2 className="text-2xl font-bold mb-8">Weaving Heritage Into Life</h2>
//           <p className="max-w-lg text-base/8">
//             Welcome to Woven, your premier destination for authentic Kente stoles that honor tradition and symbolize achievement.
//             Whether you're celebrating a graduation, milestone, or cultural pride, our handwoven stoles blend artistry with meaning.
//             Explore our collection and wear your story with distinction.
//           </p>
//         </div>
//       </section>
//
//       <hr />
//
//       <section className="container mx-auto flex flex-1 gap-24 py-24 justify-center items-center text-center">
//         <div className="flex flex-col items-center text-center justify-center">
//           <h2 className="text-2xl font-bold mb-8">Customize Your Own Stole!</h2>
//           <div className="max-w-lg">
//             <p className="text-base/8">
//               Design your own vibrant stole with our state-of-the-art customizer, perfect for celebrating graduations, milestones, and cultural achievements. Choose colors, patterns, and personal touches to create a one-of-a-kind piece that reflects your journey. Crown your special moment in style.
//             </p>
//             <div className="flex justify-center mt-6">
//               <CustomButton text="Get Started" bgColor="bg-black" textColor="text-white" href="/stole-customizer" />
//             </div>
//           </div>
//         </div>
//         <Image src="/images/stole-customizer-hero.jpg" alt="image of girl" width={400} height={400} />
//       </section>
//
//       <section>
//
//       </section>
//
//
//       {/*<div className="py-12">*/}
//       {/*  <ul className="flex flex-col gap-x-6">*/}
//       {/*    <FeaturedProducts collections={collections} region={region} />*/}
//       {/*  </ul>*/}
//       {/*</div>*/}
//     </>
//   )
// }


import { Metadata } from "next"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Image from "next/image"
import CustomButton from "@modules/common/components/custom-button";

export const metadata: Metadata = {
  title: "Woven Africa",
  description: "Redefining Kente ownership globally",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)
  const { collections } = await listCollections({ fields: "id, handle, title" })

  if (!collections || !region) {
    return null
  }

  return (
      <>
        <Hero />

        {/* First Section */}
        <section className="container mx-auto flex flex-wrap md:flex-nowrap gap-12 py-16 px-4 sm:px-8 lg:px-24 justify-center items-center text-center md:text-left">
          <Image
              src="/images/hero_img_2.jpeg"
              alt="image of girl"
              width={400}
              height={400}
              className="w-full sm:w-80 md:w-96 h-auto rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Weaving Heritage Into Life</h2>
            <p className="max-w-xs sm:max-w-md md:max-w-lg text-base leading-relaxed">
              Welcome to Woven, your premier destination for authentic Kente stoles that honor tradition and symbolize achievement.
              Whether you're celebrating a graduation, milestone, or cultural pride, our handwoven stoles blend artistry with meaning.
              Explore our collection and wear your story with distinction.
            </p>
          </div>
        </section>

        <hr className="border-gray-300 w-11/12 mx-auto my-8" />

        {/* Second Section */}
        <section className="container mx-auto flex flex-wrap-reverse md:flex-nowrap gap-12 py-16 px-4 sm:px-8 lg:px-24 justify-center items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Customize Your Own Stole</h2>
            <p className="max-w-xs sm:max-w-md md:max-w-lg text-base leading-relaxed">
              Design your own vibrant stole with our state-of-the-art customizer, perfect for celebrating graduations, milestones, and cultural achievements.
              Choose colors, patterns, and personal touches to create a one-of-a-kind piece that reflects your journey.
              Crown your special moment in style.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <CustomButton text="Get Started" bgColor="bg-black" textColor="text-white" href="/stole-customizer" />
            </div>
          </div>
          <Image
              src="/images/stole-customizer-hero.jpg"
              alt="image of girl"
              width={400}
              height={400}
              className="w-full sm:w-80 md:w-96 h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* Featured Products Section */}
        {/*<section className="py-12 px-4 sm:px-8 lg:px-24">*/}
        {/*  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Featured Products</h2>*/}
        {/*  <ul className="flex flex-wrap justify-center gap-6">*/}
        {/*    <FeaturedProducts collections={collections} region={region} />*/}
        {/*  </ul>*/}
        {/*</section>*/}
      </>
  )
}
