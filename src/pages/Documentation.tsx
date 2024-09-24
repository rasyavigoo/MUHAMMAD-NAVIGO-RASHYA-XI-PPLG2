import { BaseURL } from "../Constants";
import DefaultLayout from "../layouts/default";

const imgLinks = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "11.jpg",
];
const Documentation = () => {
  return (
    <DefaultLayout>
      <main className="pt-4 text-slate-900">
        <section className="flex flex-col justify-center py-10">
          <h3 className="text-orange-400 my-3 text-3xl text-center">Dokumentasi</h3>
          <div className="flex flex-wrap w-[75%] py-10 mx-auto gap-3 justify-center">
            {imgLinks.map((m) => (
              <img src={`${BaseURL}/documentation/${m}`} className="h-96 border-[3.5px] border-yellow-500" />
            ))}
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Documentation;
