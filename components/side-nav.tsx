import Link from "next/link";

const SideNav = () => {
  return <section className="h-screen w-1/5 bg-neutral-700 text-neutral-100 p-8 bg-fixed">
    <div >
        <Link href={'/dashboard'}>
            <h1>Home</h1>
        </Link>
        <Link href={'/dashboard/employees'}>
            <h1>Employees</h1>
        </Link>
        <Link href={`/dashboard/${'id'}`}>
            <h1>Employee Details</h1>
        </Link>
    </div>
  </section>;
};

export default SideNav;
