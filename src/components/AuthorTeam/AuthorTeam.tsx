import Image from "next/image";
import {
  FaFacebookF,
  FaTimes,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const authors = [
  {
    name: "Angu Tamba",
    role: "Publisher",
    imageSrc: "/images/author1.jpg",
  },
  {
    name: "Naseem Al Morad",
    role: "Author",
    imageSrc: "/images/author2.jpg",
    socialLinks: [
      { icon: <FaFacebookF />, url: "https://facebook.com" },
      { icon: <FaTimes />, url: "#" },
      { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
      { icon: <FaPinterestP />, url: "https://pinterest.com" },
    ],
  },
  {
    name: "Nayah Tantoh",
    role: "Senior Reporter",
    imageSrc: "/images/author3.jpg",
  },
];

export default function AuthorsSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Publishing Authors</h2>
        <p className="mb-12 text-gray-600">
          Wherever & whenever you need us. We are here for you – contact us for
          all your support needs, be it technical, general queries or
          information support.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-xs"
            >
              <div className="relative">
                <Image
                  alt={author.name}
                  className="w-full h-auto object-cover"
                  height={500}
                  src={author.imageSrc}
                  width={400}
                />
                {author.socialLinks && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {author.socialLinks.map((link, i) => (
                      <a
                        key={i}
                        className="text-white p-2 bg-gray-800 rounded-full hover:bg-black"
                        href={link.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{author.name}</h3>
                <p className="text-gray-600">{author.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
