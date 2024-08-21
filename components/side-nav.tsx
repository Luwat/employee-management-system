import { signOut } from "@/auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const SideNav = ({ id }: { id: string }) => {
  return (
    <section className="h-screen w-1/5 bg-neutral-700 text-neutral-100 p-8 bg-fixed">
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-xl font-medium hover:bg-sky-100 text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className="">Sign Out</div>
              </button>
            </form>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/employees"}>
              <h1>Employees</h1>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/employees/new"}>New Employee</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideNav;
