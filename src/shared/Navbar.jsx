import Feature from "@/components/Feature";
import {
  Add,
  Delete,
  Discord,
  Enlarge,
  Light,
  Logout,
} from "@/utils/icons.util";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:hidden bg-background dark:border-gray-500 border-b sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center w-fit text-sm text-white rounded-lg focus:outline-none"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <p className="text-white">New chat</p>
        <button>
          <Add />
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-normal p-2 mt-4 rounded-md bg-sideBg dark:border-gray-700">
            <li>
              <button className="block py-2 px-3 focus:bg-gray-700 w-full">
                <Feature>
                  <Delete />
                  <p className="text-white">Clear conversations</p>
                </Feature>
              </button>
            </li>
            <li>
              <button className="block py-2 px-3 focus:bg-gray-700 w-full">
                <Feature>
                  <Light />
                  <p className="text-white">Light mode</p>
                </Feature>
              </button>
            </li>
            <li>
              <button className="block py-2 px-3 focus:bg-gray-700 w-full">
                <Feature>
                  <Discord />
                  <p className="text-white">OpenAI Discord</p>
                </Feature>
              </button>
            </li>
            <li>
              <button className="block py-2 px-3 focus:bg-gray-700 w-full">
                <Feature>
                  <Enlarge />
                  <p className="text-white">Updates & FAQ</p>
                </Feature>
              </button>
            </li>
            <li>
              <button className="block py-2 px-3 focus:bg-gray-700 w-full">
                <Feature>
                  <Logout />
                  <p className="text-white">Log out</p>
                </Feature>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
