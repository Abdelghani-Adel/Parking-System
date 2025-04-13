import Protect from "@/components/layout/Protect";
import DashboardForAdmin from "@/components/molecules/dashboard/admin";
import DashboardForOperator from "@/components/molecules/dashboard/operator";
import DashboardForSuperAdmin from "@/components/molecules/dashboard/super-admin";
import DashboardForSupervisor from "@/components/molecules/dashboard/super-visor";
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
