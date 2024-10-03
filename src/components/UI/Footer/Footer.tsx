import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6 uppercase">
            Gadget <span className="text-pink-600">Guru Hub </span>
          </h2>
          <div className="flex space-x-4 mb-6">
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-pink-500 transition-colors">
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-pink-500 transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-500 transition-colors"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-pink-500 transition-colors"
                >
                  PRIVACY
                </Link>
              </li>
              <li>
                <Link
                  href="/advertise"
                  className="hover:text-pink-500 transition-colors"
                >
                  ADVERTISE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pink-500 transition-colors"
                >
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ThemeSphere. Designed by ThemeSphere.
          </p>
        </div>
      </div>
    </footer>
  );
}
