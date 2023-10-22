import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     {/* <div className="publicLayout"> */}
      <Navbar />
      {children}
      <Footer />
     {/* </div> */}
    </>
  );
}
