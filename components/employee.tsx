import Link from "next/link";
import DeleteEmployeeButton from "./DeleteButton";

export default function Employee({
  id,
  firstName,
  lastName,
  position,
}: {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}) {
  return (
    <section className="md:flex justify-around items-center m-auto">
      <div className="w-[200px]">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{position}</p>
      </div>
      <div className="flex flex-col gap-2 lg:gap-5 w-[200px] md:w-[350px]  justify-end">
        <ul className="flex  gap-5">
          <li>
            <Link href={`/employees/${id}`}>
              <button>View Details</button>
            </Link>
          </li>
          <li>
            <Link href={`/employees/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </li>
        </ul>
        <DeleteEmployeeButton id={id} />
      </div>
    </section>
  );
}
