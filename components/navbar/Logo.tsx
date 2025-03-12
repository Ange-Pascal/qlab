import Link from "next/link";
import React from "react";
import { RiComputerFill } from "react-icons/ri";

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-row">
        <span className="text-5xl font-bold">Q</span>
        <span className="flex flex-row text-xl">
          Lab
          <RiComputerFill size={50} className="text-purple-950" />
        </span>
      </div>
    </Link>
  );
}

export default Logo;
