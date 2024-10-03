import Image from "next/image";

import satelliteImage from "../../assets/satelight.jpg";

const TopNews = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl  mb-8 uppercase">Trending</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="relative">
          <Image
            alt="Small robot"
            className="object-cover w-full h-[250px]"
            height={250}
            src={satelliteImage}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="inline-block bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
              ROBOT
            </span>
            <h3 className="text-white text-lg font-bold mb-1 cursor-pointer hover:underline">
              How To Handle Every TECHNOLOGY Challenge With Ease Using These
            </h3>
            <p className="text-white text-sm">By axilthemes</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative">
          <Image
            alt="Satellite dish"
            className="object-cover w-full h-[250px]" // Reduced height
            height={250}
            src={satelliteImage}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="inline-block bg-purple-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
              SATELLITE
            </span>
            <h3 className="text-white text-lg font-bold mb-1 cursor-pointer hover:underline">
              What Can You Do To Save Your TECHNOLOGY From Destruction
            </h3>
            <p className="text-white text-sm">By axilthemes</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="relative">
          <Image
            alt="Smart watch"
            className="object-cover w-full h-[250px]" // Reduced height
            height={250}
            src={satelliteImage}
            width={400}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <span className="inline-block bg-lime-500 text-white px-3 py-1 text-sm font-semibold rounded-full mb-2">
              SMART WATCH
            </span>
            <h3 className="text-white text-lg font-bold mb-1 cursor-pointer hover:underline">
              These 5 Simple TECHNOLOGY Tricks Will Pump Up Your Sales
            </h3>
            <p className="text-white text-sm">By axilthemes</p>
          </div>
        </div>
      </div>

      {/* Banner section*/}
      <section
        className=" cursor-pointer mt-10 relative bg-cover bg-center bg-no-repeat h-64"
        style={{
          backgroundImage: "url(https://i.ibb.co/vHV1HzM/banner-Imge.webp)",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h2 className="text-3xl font-bold mb-4">NEW SMARTMAG</h2>
          <p className="text-lg mb-6">TRY IT, YOU'LL LOVE IT</p>
          <Link
            href="#"
            className="bg-white text-pink-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition"
          >
            EXPLORE SMARTMAG
          </Link>
        </div> */}
      </section>
    </div>
  );
};

export default TopNews;
