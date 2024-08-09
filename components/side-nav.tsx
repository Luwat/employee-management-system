import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

const SideNav = ({ id }: { id: string }) => {
  return (
    <section className="h-screen w-1/5 bg-neutral-700 text-neutral-100 p-8 bg-fixed">
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
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
