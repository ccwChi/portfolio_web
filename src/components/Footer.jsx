import React from "react";

const Footer = () => {
  
  return (
    <footer className=" rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <hr className="mb-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="inline-flex justify-center w-full text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} &nbsp;
          <span className="hover:underline">Jeff. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
