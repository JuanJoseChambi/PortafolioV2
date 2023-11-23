// import { useState } from "react"
import logo from "../../../assets/assetsHeader/logoJC.png";
import SectionsNav from "../../../components/SectionsNav/SectionsNav";

function Nav() {
  // const [sections, setSections] = useState(false)
  return (
    <nav className="area">
      <nav className="area fixed top-0 z-10">
        <section className="flex justify-between items-center py-2">
          <picture className="top-0 flex w-[65px] select-none">
            <img
              src={logo}
              alt="Juan Jose Chambi"
              className="w-full pointer-events-none"
            />
          </picture>

          <section className="">
            <ul className="hidden sm:flex space-x-8 font-semibold tracking-widest text-xxs text-grey-light transition-colors duration-500">
              <SectionsNav>SOBRE MI</SectionsNav>
              <SectionsNav>TECNOLOGIAS</SectionsNav>
              <SectionsNav>PROYECTOS</SectionsNav>
              <SectionsNav>CONTACTO</SectionsNav>
            </ul>
          </section>
          <i className="bx bx-menu block sm:hidden text-3xl text-white-light cursor-pointer"></i>
        </section>
      </nav>

      <nav className="area h-[150px] fixed bottom-4 z-10 flex justify-between items-end">
        <ul className="flex justify-center items-center flex-col text-xl text-grey-light">
          <li>
            <i className="cursor-pointer hover:text-white-light bx bxl-github"></i>
          </li>
          <li>
            <i className="cursor-pointer hover:text-white-light bx bxl-gmail"></i>
          </li>
          <li>
            <i className="cursor-pointer hover:text-white-light bx bxl-linkedin-square"></i>
          </li>
          <li>
            <i className="cursor-pointer hover:text-white-light bx bxl-twitter"></i>
          </li>
        </ul>

        <ul className="h-[150px] flex flex-col justify-center items-center text-grey-light text-xxs font-semibold tracking-widest">
          <div className="w-[30px] h-[1px] bg-grey-light hover:bg-white-light rotate-90 cursor-pointer"></div>
          <li className="hover:text-white-light cursor-pointer rotate-90 my-12">
            SOMBRE MI
          </li>
          <div className="w-[30px] h-[1px] bg-grey-light hover:bg-white-light rotate-90 cursor-pointer"></div>
        </ul>
      </nav>
    </nav>
  );
}

export default Nav;
