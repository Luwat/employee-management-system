import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {

  return (
    <header className="fixed w-full flex justify-around items-center bg-neutral-700 py-4 text-neutral-100 drop-shadow-lg ">
      <section className="flex gap-10 items-center">
        <Link href="/">
          <Image src={"/s-logo.png"} alt="" width={40} height={40} />{" "}
        </Link>
        <h1>Sleeky Employee Management System</h1>
      </section>
      <nav>
        <ul className="flex gap-10">
          <li>
            <Link href={"/register"}>Register</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
