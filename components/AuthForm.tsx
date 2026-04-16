"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);


  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/icons/logo.svg" alt="Zetra Logo" width={34} height={34} />
          <h1 className="text-[26px] font-bold">Zetra</h1>
        </Link>

        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>

      {!user && (
       <>
       FORM
       </>
      )}
    </section>
  );
};

export default AuthForm;