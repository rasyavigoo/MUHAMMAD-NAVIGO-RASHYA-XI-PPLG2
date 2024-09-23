import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/default";

const Home = () => {
  return (
    <DefaultLayout>
      <main>
        <section className="flex bg-yellow-500 pt-20 pb-16 text-white text-center font-semibold items-center justify-center">
          <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between">
            <div className="md:w-[45%] text-center md:text-left space-y-4 md:pt-3">
              <h1 className="text-4xl md:text-5xl font-bold">
                Sanghiyang Gagak Hitam
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium">
                Kuasai kemampuan silatmu dengan presisi dan disiplin.
              </h2>
              <div className="flex md:hidden w-[80%] mx-auto rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 items-center">
                <img
                  src="/documentation/3.jpg"
                  className="w-full h-auto shadow-lg"
                  alt="Seorang pesilat sedang berlatih silat"
                />
              </div>
              <p className="text-lg pt-4">
                Mulailah perjalanan menuju kekuatan dan kebijaksanaan.
                Tingkatkan keahlianmu, asah gerakanmu, dan jadilah satu dengan
                jalan sang pejuang.
              </p>
            </div>
            <div className="hidden md:flex w-[40%] rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 items-center">
              <img
                src="/documentation/3.jpg"
                className="w-full h-auto shadow-lg"
                alt="Seorang pesilat sedang berlatih silat"
              />
            </div>
          </div>
        </section>
        <section className="text-slate-600 py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row ">
            <div className="flex md:w-[40%] mb-6 md:mb-0 rounded-lg overflow-hidden md:mr-8 md:items-start md:justify-left justify-center items-center">
              <img
                src="/documentation/2.jpg"
                className="h-5/6 w-auto shadow-lg"
                alt="Ilustrasi seni bela diri silat"
              />
            </div>
            <div className="flex flex-col md:w-[60%] space-y-4 md:pt-5">
              <h2 className="text-3xl font-bold">Apa itu Silat?</h2>
              <p className="text-xl leading-relaxed">
                Silat adalah seni bela diri tradisional yang berasal dari Asia
                Tenggara, khususnya dari Indonesia, Malaysia, dan Brunei.
                Berakar dari budaya lokal, silat memadukan gerakan fisik yang
                indah dengan prinsip-prinsip filosofi hidup, seperti kehormatan,
                disiplin, dan keseimbangan. Tidak hanya berfokus pada kemampuan
                bertarung, silat juga mengajarkan keselarasan antara tubuh,
                pikiran, dan jiwa.
              </p>
              <p className="text-xl leading-relaxed">
                Seni bela diri ini juga memiliki banyak aliran yang berbeda,
                masing-masing dengan gaya dan tekniknya sendiri. Dari pertahanan
                diri hingga pertarungan ofensif, silat memberikan pendekatan
                holistik dalam melatih kekuatan fisik sekaligus mendidik moral
                dan etika.
              </p>
            </div>
          </div>
        </section>

        {/* Kenapa Harus Sanghiyang Gagak Hitam Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Kenapa Harus Sanghiyang Gagak Hitam?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Sanghiyang Gagak Hitam bukan sekadar tempat belajar silat. Kami
              adalah komunitas yang berkomitmen pada keunggulan, baik dalam seni
              bela diri maupun dalam nilai-nilai hidup. Berikut adalah alasan
              mengapa memilih kami adalah langkah terbaik untuk perjalanan
              silatmu:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                  Pelatihan Mendalam
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Kami menawarkan pelatihan yang komprehensif dan fokus pada
                  setiap aspek silat, dari teknik dasar hingga strategi tingkat
                  lanjut.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                  Instruktur Berpengalaman
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Dapatkan bimbingan langsung dari para ahli yang memiliki
                  pengalaman bertahun-tahun dalam seni bela diri silat dan
                  pengajarannya.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
                  Komunitas yang Kuat
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Kami adalah keluarga besar yang saling mendukung dalam belajar
                  dan berkembang. Bersama-sama, kita mengasah kemampuan
                  sekaligus membangun persahabatan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bergabunglah dengan Kami Section */}
        <section className="bg-gray-100 py-20">
          <div className="flex flex-col mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Bergabunglah dengan Kami!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-[75%] mx-auto">
              Jadilah bagian dari komunitas yang penuh dengan semangat dan
              dedikasi. Di Sanghiyang Gagak Hitam, kami menawarkan pelatihan
              yang mendalam, dukungan yang kuat, dan lingkungan yang membangun,
              di mana setiap anggota bisa mengasah kemampuan silat mereka secara
              maksimal. Bersama-sama kita belajar, tumbuh, dan menjaga warisan
              seni bela diri tradisional ini.
            </p>
            <Link to={"https://chat.whatsapp.com/"} target="_blank">
              <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300 mx-auto">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Home;
