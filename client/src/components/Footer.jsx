import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import React from 'react';

export default function FooterCom() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Footer container className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              About
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://www.100jsprojects.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  100 JS Projects
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  Sahand's Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://github.com/sahandghavidel" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="mailto:contact@example.com" className="hover:underline">
                  Email Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-between rounded-lg">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            {currentYear} <a href="/" className="hover:underline">Tejas's Blog</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="https://github.com/sahandghavidel" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
              <BsGithub className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <BsDribbble className="w-5 h-5" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}