import AddUser from "@/components/molecules/AddUser";
import UserTable from "@/components/molecules/tables/user";
import { getUsersList } from "@/services/getUsersList";
import { FaUsersBetweenLines } from "react-icons/fa6";

const Page = async () => {
  const users = await getUsersList();

  return (
    <div className="p-4 space-y-4">
      <AddUser />
      <UserTable users={users.records} />
    </div>
  );
};

export default Page;
