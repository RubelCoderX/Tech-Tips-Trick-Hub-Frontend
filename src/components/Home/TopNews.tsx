"use client";
import Image from "next/image";
import Link from "next/link";

const TopNews = ({ posts }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl  mb-8 uppercase text-pink-500 font-bold">
        Trending
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* First Card */}
        {posts.slice(3, 6).map((post) => (
          <div key={post._id} className="relative">
            <Image
              alt="Small robot"
              className="object-cover w-full h-[250px]"
              height={250}
              src={post.images[0]}
              width={400}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <span className="inline-block bg-pink-500 text-white px-3 py-1 text-sm font-semibold  mb-2">
                {post?.category}
              </span>
              <Link
                className="text-white block text-lg font-bold mb-1 cursor-pointer hover:underline"
                href={`/${post._id}`}
              >
                {post?.title}
              </Link>
              <p className="text-white text-sm">By {post?.author?.name}</p>
            </div>
          </div>
        ))}
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
