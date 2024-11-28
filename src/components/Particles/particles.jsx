import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load versi ringan dari tsParticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // Debugging jika diperlukan
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1A1A1D", // Warna latar belakang tetap gelap
        },
      },
      fpsLimit: 120, // Frame rate tinggi untuk animasi halus
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "connect", // Efek sambungan dengan pointer
          },
        },
        modes: {
          connect: {
            distance: 150, // Jarak koneksi
            radius: 100, // Radius koneksi interaktif
            links: {
              opacity: 0.7, // Transparansi garis koneksi
            },
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff"], // Variasi warna partikel
        },
        links: {
          color: "#ffffff", // Warna garis tautan
          distance: 150, // Jarak koneksi antar partikel
          enable: true, // Pastikan partikel tetap saling terhubung
          opacity: 0.5, // Transparansi garis
          width: 1, // Ketebalan garis koneksi
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce", // Pantulan saat partikel keluar batas
          },
          random: false, // Tidak bergerak acak
          speed: 1.5, // Kecepatan gerakan
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Kepadatan partikel di area layar
          },
          value: 60, // Jumlah total partikel
        },
        opacity: {
          value: { min: 0.4, max: 0.8 }, // Variasi transparansi
          animation: {
            enable: true,
            speed: 0.5, // Kecepatan perubahan transparansi
            sync: false,
          },
        },
        shape: {
          type: ["circle", "triangle", "polygon"], // Bentuk partikel beragam
          polygon: {
            sides: 5, // Untuk bentuk polygon (pentagon)
          },
        },
        size: {
          value: { min: 2, max: 6 }, // Ukuran partikel
          animation: {
            enable: true,
            speed: 3, // Perubahan ukuran secara halus
            sync: false,
          },
        },
      },
      detectRetina: true, // Dukungan Retina
    }),
    []
  );

  return (
    <Particles
      id={props.id || "tsparticles"} // ID default jika tidak diberikan
      init={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
