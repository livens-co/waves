import prismadb from "@/lib/prismadb";

const DashboardPage = async () => {
  const user = await prismadb.user.findFirst();

  if (!user) {
    return <div>No User found</div>;
  }

  return <div>Admin</div>;
};

export default DashboardPage;
