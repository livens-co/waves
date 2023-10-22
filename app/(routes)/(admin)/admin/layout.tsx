import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "./components/Navbar";

import './style.scss'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/admin");
  }

  const user = await prismadb.user.findFirst({
    where: {
      userId,
    },
  });

  if (!user) {
    redirect("/admin");
  }

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboardInner">
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
