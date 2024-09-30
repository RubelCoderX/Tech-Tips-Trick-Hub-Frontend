import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "World",
    links: [
      "U.N.",
      "Conflicts",
      "Terrorism",
      "Disasters",
      "Global Economy",
      "Environment",
      "Scandals",
    ],
  },
  {
    title: "International",
    links: [
      "Executive",
      "Senate",
      "House",
      "Judiciary",
      "Foreign policy",
      "Polls",
      "Elections",
    ],
  },
  {
    title: "Entertainment",
    links: [
      "Celebrity News",
      "Movies",
      "TV News",
      "Music News",
      "Style News",
      "Entertainment Video",
    ],
  },
  {
    title: "Business",
    links: [
      "Markets",
      "Politics",
      "Technology",
      "Features",
      "Business Leaders",
    ],
  },
  {
    title: "Health",
    links: [
      "Healthy Living",
      "Medical Research",
      "Mental Health",
      "Cancer",
      "Heart Health",
      "Children's Health",
    ],
  },
  {
    title: "About",
    links: [
      "Contact Us",
      "About Us",
      "Fox Around the World",
      "Advertise With Us",
      "Ad Choices",
      "Media Relations",
      "Compliance",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="light light:bg-[#1A1A1A] dark dark:bg-[#1A1A1A] text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h2 className="font-bold text-lg mb-4">{column.title}</h2>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      className="text-gray-400 hover:text-white transition-colors"
                      href="#"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link className="text-2xl font-bold" href="/">
              Papr
            </Link>
          </div>
          <div className="flex space-x-4">
            <span className="text-gray-400">Find us here</span>
            <Link
              className="text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <Facebook size={20} />
            </Link>
            <Link
              className="text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <Twitter size={20} />
            </Link>
            <Link
              className="text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              className="text-gray-400 hover:text-white transition-colors"
              href="#"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
