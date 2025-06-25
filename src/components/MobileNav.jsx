import React from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";


const MobileNav = ({ value, setValue }) => {
  const menu = React.useRef();
  const button = React.useRef();

  React.useEffect(() => {
    function handleClick({ target }) {
      if (!menu.current.contains(target) && !button.current.contains(target)) {
        setValue(false);
      }
    }

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="block md:hidden">
      <div ref={button}>
        <RiMenu3Fill
          onClick={() => setValue(true)}
          className={`block md:hidden ${
            value ? "invisible" : "visible"
          } text-white text-[28px] cursor-pointer`}
        />
      </div>

      <div
        ref={menu}
        className={`fixed ${
          value ? "right-0" : "-right-full"
        } flex duration-300 flex-col top-0 h-screen w-8/12 sm:w-10/12 align-start bg-white text-[#111] uppercase font-bold text-[12px] z-30 drop-shadow`}
      >
        <div className="p-5 border-[1px] border-b-[#eee] flex justify-end">
          <IoMdClose
            onClick={() => setValue(false)}
            className="text-[28px] cursor-pointer "
          />
        </div>

        <nav className="flex flex-col gap-5 p-5 border-[1px] border-b-[#eee]">
          <Link className="px-2 py-5" to={"/"}>
            Home
          </Link>
          <Link className="px-2 py-5" to={"/about"}>
            About
          </Link>

          <Link className="px-2 py-5" to={"/portfolio"}>
            Portfolio
          </Link>

          <Link className="px-2 py-5" to={"/contact"}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-5 text-[36px] text-[#111] p-5">
          <p className="text-[12px] text-[#bbb] font-regular flex-1">
            Follow me
          </p>
          <a href="https://www.instagram.com/na_pix1/" target="__blank">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
