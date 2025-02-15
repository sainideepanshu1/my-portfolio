import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode === "light" ? assets.logo : assets.logo_dark}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <a
          href="mailto:deepanshusaini.saini5@gmail.com"
          className="flex w-max items-center gap-2 mx-auto"
        >
          <Image
            src={
              isDarkMode === "light" ? assets.mail_icon : assets.mail_icon_dark
            }
            alt=""
            className="w-6 "
          />
          deepanshusaini.saini5@gmail.com
        </a>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Deepanshu Saini. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/sainideepanshu1">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sainideepanshu1/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
