import { signOut } from "@/auth";
import Link from "next/link";
import Button from "./Button";

const SideNav = () => {
  return (
    <section className="h-1/6 w-full md:h-screen md:w-1/5 bg-neutral-700 text-neutral-100 p-8 bg-fixed">
      <nav>
        <ul className="flex md:flex-col  items-center md:items-start gap-3">
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
              <Button className="py-1 px-2  bg-neutral-100 text-neutral-700">
                Sign Out
              </Button>
            </form>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default SideNav;
