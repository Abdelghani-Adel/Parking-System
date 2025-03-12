import OperatorDashboard from "@/components/Dashboard/OperatorDashboard";
import { Metadata } from "next";
import { FaCalculator, FaCar } from "react-icons/fa6";
import { GiExitDoor } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";

export const metadata: Metadata = {
  title: "Quantum Parking - Dashboard",
};

export default function Home() {
  return (
    <section className="w-full h-full overflow-auto">
      <OperatorDashboard />
    </section>
  );
}
