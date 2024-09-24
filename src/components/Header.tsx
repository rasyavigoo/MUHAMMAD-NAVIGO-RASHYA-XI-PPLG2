import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BaseURL } from "../Constants";

const Header = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {!isMobileOpen && (
        <button
          className="fixed right-0 md:hidden p-4"
          onClick={() => {
            setMobileOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="text-orange-200 h-10" />
        </button>
      )}
      <nav
        className={`w-full bg-yellow-500 md:px-4  ${
          isMobileOpen ? "fixed min-h-screen z-[1]" : "hidden"
        } md:block text-white`}
      >
        <div className="py-5 flex flex-col justify-between mx-auto items-center lg:w-[90%] md:flex-row ">
          <div className="flex items-center justify-between w-full px-4 md:w-auto">
            <div className="flex items-center gap-x-5">
              <img src="/logo.png" alt="" className="h-10" />
              <h4 className="max-w-32 text-center overflow-hidden text-md font-semibold">
                Sanghiyang <br /> Gagak Hitam
              </h4>
            </div>
            {isMobileOpen && (
              <button
                className="md:hidden"
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                <div className="flex flex-col gap-3 p-4 group">
                  <FontAwesomeIcon icon={faTimes} className="text-white h-8" />
                </div>
              </button>
            )}
          </div>

          <ul className="flex flex-col py-20 gap-5 md:py-0 md:flex-row justify-between items-center text-white font-bold capitalize">
            <li>
              <Link
                className="transition-all duration-300 hover:opacity-80"
                to={`${BaseURL}`}
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:opacity-80"
                to={`${BaseURL}/dokumentasi`}
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Dokumentasi
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 hover:opacity-80"
                to={`${BaseURL}/jadwal-latihan`}
                onClick={() => {
                  setMobileOpen(false);
                }}
              >
                Jadwal Latihan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
