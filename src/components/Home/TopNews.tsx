import Image from "next/image";

import satelliteImage from "../../assets/satelight.jpg";

const TopNews = () => {
  return (
    <div className="mt-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Top News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        <div className="relative">
          <Image
            alt="Small robot"
            className="object-cover w-full h-[350px]"
            height={300}
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
            className="object-cover w-full h-[350px]"
            height={300}
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
            className="object-cover w-full h-[350px]"
            height={300}
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
    </div>
  );
};

export default TopNews;
