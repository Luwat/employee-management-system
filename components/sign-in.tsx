"use client";

import { authenticate } from "@/lib/action";
import { useFormState } from "react-dom";
import Button from "./Button";

export default function SignIn() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );
  return (
    <section className="flex items-center justify-center h-screen">
      <form
        action={formAction}
        className="w-[90vw] lg:w-2/5 md:w-2/4 xl:w-1/4 bg-neutral-100 shadow-2xl shadow-neutral-700 rounded-2xl py-8 flex justify-center items-center"
        autoComplete="off"
      >
        <div className="">
          <h1 className={` mb-3 text-2xl`}>Please log in to continue.</h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-neutral-700 text-neutral-100 hover:text-neutral-300 mt-5"
            aria-disabled={isPending}
          >
            Login
          </Button>
          <div
            className="flex h-2 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <p className="text-sm text-red-500">{errorMessage}</p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}
