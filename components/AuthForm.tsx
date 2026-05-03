"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";




const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   classNames: {
    //     content: "flex flex-col gap-2",
    //   },
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // });

    
    // Sign up
    try {
      console.log(data);
      // Sign up with Appwrite & create plain link
      // if(type === 'sign-up'){
      //   const userData = {
      //     const newUser = await signUp(data)

      //     setUser(newUser)
      //   }
      // }
  
// sign In
      // if(type === 'sign-in'){
      //   const userData = {
      //     const response = await signIn({
      //       email: data.email,
      //       password: data.password,
      //     })
      //     if(response) router.push("/")
      //   }
      // }
      
if (type === "sign-up") {
  const newUser = await signUp(data);
  setUser(newUser);
} else {
  const response = await signIn({
    email: data.email,
    password: data.password,
  });

  if (response) router.push("/");
}

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.png"
            alt="Zetra Logo"
            width={34}
            height={34}
          />
          <h1 className="text-[26px] font-bold">Zetra</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
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

      {user ? (
        <div className="">PlaidLink</div>
      ) : (
        <>
          <form
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FieldGroup>
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="ex: NY"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 11101"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date Of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
            </FieldGroup>
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                form="form-rhf-demo"
                className="form-btn bg-bank-gradient"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    &nbsp;Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>

          <footer className="flex justify-center gap-1">
            <p className="text-sm leading-5 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an accoun?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
