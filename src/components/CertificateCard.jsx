/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

export const CertificateCard = ({ imgSrc, title, penerbit, terbit, desc, link }) => {
  return (
    <>
      {/* Certificate Card as a Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[400px] bg-zinc-800/50 p-4 mb-6 rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out transform hover:scale-105 reveal-up">
        {/* Gambar Sertifikat */}
        <figure className="w-full mb-4 reveal-up`">
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-auto rounded-md object-contain"
          />
        </figure>

        {/* Konten Sertifikat */}
        <div className="text-center">
          <p className="text-base md:text-lg font-semibold text-zinc-200 mb-2 reveal-up">{title}</p>
          <p className="text-xs md:text-sm text-zinc-500 mb-2 reveal-up">{desc}</p>
          <p className="text-xs text-zinc-400 reveal-up">
            {penerbit} | {terbit}
          </p>
        </div>
      </a>
    </>
  );
};

CertificateCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  penerbit: PropTypes.string.isRequired,
  terbit: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // URL menuju halaman sertifikat
};
