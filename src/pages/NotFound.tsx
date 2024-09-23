import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-200 justify-center items-center">
        <h1 className="text-3xl">404 Not Found</h1>
        <Link to={"/"} className="pt-2 text-slate-600 text-md">
          Kembali halaman utama
        </Link>
      </div>
    </>
  );
};

export default NotFound;
