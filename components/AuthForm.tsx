"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";



const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="Zetra Logo"
            width={34}
            height={34}
          />
          <h1 className="text-[26px] font-bold">Zetra</h1>
        </Link>

        <div className="flex flex-col gap-1  md:gap-3">
          <h1 className="text-2xl leading-8 lg:text-4xl lg:leading-11 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-base leading-6 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? <div className="">PlaidLink</div> : <>FORM</>}
    </section>
  );
};

export default AuthForm;
