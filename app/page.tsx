import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen w-screen flex-col items-center justify-center p-4">
        <section className="text-center text-neutral-900">
          <h1 className="text- md:text-3xl m-5">Welcome to Sleeky Programmers.</h1>
          <p>Click the buttons above for register and login options</p>
        </section>
      </main>
    </>
  );
}
