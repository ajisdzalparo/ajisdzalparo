/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

import { CertificateCard } from "./CertificateCard";

const certificate = [
  {
    title: "Belajar React.js Fundamental",
    imgSrc: "./src/assets/images/sertifikat-react.png",
    penerbit: "Codepolitan -  Kelas Fullstack",
    terbit: "November 2024",
    desc: "Mempelajar React JS fundamental pada course kelas fullstack codepolitan",
    link: "https://www.codepolitan.com/c/AOKQH2N/",
  },
  {
    title: "Belajar Cepat Vue JS 2",
    imgSrc: "./src/assets/images/sertifikat-vue.png",
    penerbit: "Codepolitan -  Kelas Fullstack",
    terbit: "Oktober 2023",
    desc: "Menguasai Vue JS pada course kelas fullstack codepolitan",
    link: "https://www.codepolitan.com/c/X5UGYHI/",
  },
  {
    title: "Belajar Konsep OOP di JavaScript",
    imgSrc: "./src/assets/images/sertifikat-javascript-oop.png",
    penerbit: "Codepolitan -  Kelas Fullstack",
    terbit: "Oktober 2023",
    desc: "Menguasai Vue JS pada course kelas fullstack codepolitan",
    link: "https://www.codepolitan.com/c/REAMVTV/",
  },
  {
    title: "Belajar JavaScript Asynchronous",
    imgSrc: "./src/assets/images/sertifikat-javascript-asynchronous.png",
    penerbit: "Codepolitan -  Kelas Fullstack",
    terbit: "September 2024",
    desc: "Menguasai JavaScript Asynchronous pada course kelas fullstack codepolitan",
    link: "https://www.codepolitan.com/c/NUSPOZE/",
  },
  {
    title: "Belajar JavaScript DOM",
    imgSrc: "./src/assets/images/sertifikat-belajar-dom.png",
    penerbit: "Codepolitan -  Kelas Fullstack",
    terbit: "Juli 2023",
    desc: "Menguasai JavaScript DOM pada course kelas fullstack codepolitan",
    link: "https://www.codepolitan.com/c/87EZXTC/",
  },
  {
    title: "Belajar Dasar Node.JS",
    imgSrc: "./src/assets/images/sertifikat-nodejs.png",
    penerbit: "Bisa AI Academy",
    terbit: "November 2022",
    desc: "Mempelajari Node.js pada course Bisa AI Academy - MSIB",
    link: "https://drive.google.com/file/d/1diXlC1_3Q6DjK8iwzjj-dhM9iWEGN-FZ/view",
  },
];

export const Certificate = () => {
  return (
    <section
      id="certificate"
      className="section py-12 reveal-up">
      <div className="container mx-auto">
        <h2 className="headline-2 text-2xl font-semibold text-center text-white mb-8 reveal-up">What certificates do I have</h2>

        {/* Flex container with responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-up">
          {certificate.map(({ imgSrc, title, penerbit, terbit, desc, link }, key) => (
            <CertificateCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              penerbit={penerbit}
              terbit={terbit}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
