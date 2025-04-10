import Protect from "@/components/layout/Protect";
import DashboardForAdmin from "@/components/molecules/DashboardForAdmin";
import DashboardForOperator from "@/components/molecules/DashboardForOperator";
import DashboardForSuperAdmin from "@/components/molecules/DashboardForSuperAdmin";
import DashboardForSupervisor from "@/components/molecules/DashboardForSupervisor";
import { roles } from "@/utils/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Parking - Dashboard",
};

export default function Home() {
  return (
    <section>
      <Protect roles={[roles.superAdmin]}>
        <DashboardForSuperAdmin />
      </Protect>

      <Protect roles={[roles.admin]}>
        <DashboardForAdmin />
      </Protect>

      <Protect roles={[roles.superVisor]}>
        <DashboardForSupervisor />
      </Protect>

      <Protect roles={[roles.operator]}>
        <DashboardForOperator />
      </Protect>
    </section>
  );
}
