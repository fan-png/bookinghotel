"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center flex-col cursor-pointer"
    >
      <Image
        className="hidden md:block "
        src="/images/hotel.png"
        height="50"
        width="50"
        alt="Logo"
      />

      <span className="travella uppercase font-bold text-white">Vivid Vista Hotel</span>
    </div>
  );
};

export default Logo;
