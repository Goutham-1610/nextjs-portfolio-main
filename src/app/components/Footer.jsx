import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>GG</span>
        <div className="flex gap-4">
          <Link href="https://github.com/Goutham-1610" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/goutham-g-3231b72a9/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
