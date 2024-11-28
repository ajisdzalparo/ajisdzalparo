/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import propTypes from "prop-types";

export const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(); // Referensi untuk item link yang terakhir aktif
  const activeBox = useRef(); // Referensi untuk elemen active-box

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    // Menyesuaikan posisi activeBox dengan elemen link aktif
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  // Inisialisasi active box setelah render pertama
  useEffect(() => {
    initActiveBox();
    // Event listener resize untuk memperbarui posisi activeBox
    const handleResize = () => initActiveBox();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeCurrentLink = (event) => {
    if (!lastActiveLink.current) return;

    // Menghapus kelas aktif pada elemen sebelumnya dan menambahkan pada elemen baru
    lastActiveLink.current.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Menyesuaikan posisi dan ukuran activeBox sesuai elemen yang dipilih
    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Project", link: "#project", className: "nav-link" },
    { label: "Certificate", link: "#certificate", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={key === 0 ? lastActiveLink : null} // Hanya set referensi untuk link pertama
          className={className}
          onClick={activeCurrentLink}>
          {label}
        </a>
      ))}
      <div
        className="active-box"
        ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: propTypes.bool.isRequired,
};

export default Navbar;
