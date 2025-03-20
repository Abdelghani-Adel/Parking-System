import TableUsers from "@/components/molecules/TableUsers";
import { getUsersList } from "@/services/getUsersList";
import { FaUsersBetweenLines } from "react-icons/fa6";

const Page = async () => {
  const users = await getUsersList();

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
        <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
          <FaUsersBetweenLines />
          Users
        </h2>

        <TableUsers users={users.records} />
      </div>
    </div>
  );
};

export default Page;
