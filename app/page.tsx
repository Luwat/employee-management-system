import SignIn from "@/components/sign-in";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome home man.</h1>
      <Link href={'/login'}><button className="bg-neutral-700 text-neutral-100 py-2 px-4 rounded">Sign in</button></Link>
      <Link href={'/register'}><button className="bg-neutral-700 text-neutral-100 py-2 px-4 rounded">Register</button></Link>
    </main>
  );
}
