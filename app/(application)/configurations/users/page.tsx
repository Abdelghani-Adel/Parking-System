import AddUser from "@/components/molecules/AddUser";
import TableUsers from "@/components/molecules/TableUsers";
import { getUsersList } from "@/services/getUsersList";
import { FaUsersBetweenLines } from "react-icons/fa6";

const Page = async () => {
  const users = await getUsersList();

  return (
    <div className="p-4 space-y-4">
      <AddUser />
      <TableUsers users={users.records} />
    </div>
  );
};

export default Page;
