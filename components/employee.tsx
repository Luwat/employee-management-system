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
    <section className="flex justify-center items-center bg-neutral-100 rounded-2xl shadow-2xl shadow-neutral-900">
      <div className="flex justify-around items-center p-4 w-full min-h-[150px] md:min-h-24 text-sm md:text-base">
        <div className="">
          <h2>
            {firstName} {lastName}
          </h2>
          <p>{position}</p>
        </div>
        <div className="">
          <ul className="">
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
      </div>
    </section>
  );
}
