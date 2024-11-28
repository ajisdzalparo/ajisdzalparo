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
        <div className="bg-zinc-800/50 p-8 rounded-2xl md:p-12 reveal-up">
          {/* Deskripsi Tentang */}
          <p className="text-zinc-300 mb-6 md:mb-10 md:text-xl leading-relaxed">
            Saya adalah seorang fresh graduate di bidang Teknik Informatika dengan keahlian di pengembangan website. Memiliki pengalaman organisasi di IT club dan bekerja di proyek seperti buku tamu berbasis web. Saya antusias belajar dan
            bekerja di bidang teknologi.
          </p>

          {/* Section Pendidikan */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-center text-sky-400 mb-8">Pendidikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informasi Universitas */}
              <div className=" rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-semibold text-sky-400">Universitas AKI Semarang</h3>
                <p className="mt-2">Jurusan: Teknik Informatika</p>
                <p className="mt-2">Tahun Kelulusan: 2024</p>
                <p className="mt-2">IPK: 3.31</p>
              </div>

              {/* Nilai Tambah */}
              <div className="rounded-lg p-6 border border-zinc-700">
                <h3 className="text-xl font-semibold text-sky-400">Nilai Tambah</h3>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>Kerja tim yang solid dan kolaboratif</li>
                  <li>Kemampuan belajar cepat dan adaptasi</li>
                  <li>Mau belajar hal baru</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
