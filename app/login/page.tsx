import Header from "@/components/Header";
import SignIn from "@/components/sign-in";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <SignIn />
        </div>
      </main>
    </>
  );
}
