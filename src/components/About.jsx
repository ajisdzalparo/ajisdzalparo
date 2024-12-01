/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

export const About = () => {
  return (
    <section
      id="about"
      className="section text-zinc-300 py-12">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-800 p-8 rounded-2xl md:p-12 reveal-up">
          {/* Deskripsi Tentang */}
          <p className="text-zinc-300 mb-6 md:mb-10 md:text-xl leading-relaxed">
            I am a fresh graduate in Informatics Engineering with expertise in web development using Vue.js, React.js, and Laravel. I have organizational experience in an IT club and have worked on projects such as a web-based guestbook
            system. I am passionate about learning and working in the technology field.
          </p>

          {/* Section Pendidikan */}
          <section className="mb-10">
            <h2 className="headline-2 mx-auto font-bold text-center text-sky-400 mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informasi Universitas */}
              <div className=" rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-semibold text-zinc-300">AKI University Semarang</h3>
                <p className="mt-2">Informatics Engineering</p>
                <p className="mt-2">Graduation year: 2024</p>
                <p className="mt-2">IPK: 3.32</p>
              </div>

              {/* Nilai Tambah */}
              <div className="rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-semibold text-zinc-300">Value</h3>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Solid and collaborative teamwork.</li>
                  <li>Fast learning ability and adaptability.</li>
                  <li>Able to learn new things.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
