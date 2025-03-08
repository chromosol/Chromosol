import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/images/logo/logob.svg"
        alt="Chromosol Logo"
        width={45}
        height={15}
        className="w-auto h-auto max-h-10"
        quality={100}
        priority
      />
      <span className="text-2xl font-bold text-txt-light dark:text-txt-dark transition-colors duration-300">
        Chromosol.
      </span>
    </Link>
  );
};

export default Logo;