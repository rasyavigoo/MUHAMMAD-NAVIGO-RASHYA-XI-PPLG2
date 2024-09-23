import { ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-screen text-white">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
