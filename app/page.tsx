import Header from "@/components/Header";
import SignIn from "@/components/sign-in";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen flex-col items-center justify-between p-24">
        <section>
          <h1>Welcome to Sleeky Programmers.</h1>
        </section>
      </main>
    </>
  );
}
