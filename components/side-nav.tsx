import { signOut } from "@/auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const SideNav = () => {
  return (
    <section className="h-screen w-1/5 bg-neutral-700 text-neutral-100 p-8 bg-fixed">
      <nav>
        <ul>
          <li>
            <Link href={"/employees"}>
              <h1>Employees</h1>
            </Link>
          </li>
          <li>
            <Link href={"/employees/new"}>New Employee</Link>
          </li>
          <li>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button className="flex py-2 px-4 bg-neutral-100 text-neutral-700">
                <div className="">Sign Out</div>
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideNav;
