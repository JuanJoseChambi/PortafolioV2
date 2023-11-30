// import { useEffect, useState } from "react";
import logoJC from "../../../assets/assetsHeader/logoJC.png";

function Footer() {
  return (
    <footer className="snap-center pt-10 h-px-screen-laptop bg-redd-500">
      <section className="h-[50%] flex justify-center items-center">
        <section className="area relative flex justify-start items-center px-28 bg-limee-500 ">
          <section className="w-[450px] h-auto bg-redd-500 space-y-3">
            <article className="space-y-5">
              <h2 className="font-semibold text-2xl text-white-light tracking-widest">
                CONTACTAME
              </h2>
              <p className="font-light text-xs text-white-light">
                Si estás buscando un colaborador apasionado y comprometido para
                futuros proyectos, ¡estaré encantado de ser parte de tu equipo!
                Contáctame y exploremos juntos las oportunidades. ¡Hasta pronto!{" "}
              </p>
            </article>
            <article className="space-y-5 py-6">
              <p className="text-xs font-light text-white-light">
                (+54)1161000622
              </p>
              <p className="text-xs font-light text-white-light">
                chambijuanjose@gmail.com
              </p>
              <p className="text-xs font-light text-white-light">
                Flores, Buenos Aires, Argentina
              </p>
            </article>
          </section>
          <form className="w-[360px] h-[380px] absolute right-44 bottom-0 translate-y-44 flex flex-col justify-center items-center rounded-sm space-y-5 z-10 shadow-[0px_0px_35px_2px_black] outline-grey-light bg-white">
            <h2 className="font-semibold text-2xl text-black tracking-widest w-full px-10">
              HABLAMOS ?{" "}
            </h2>
            <input
              type="text"
              className="w-[75%] h-[30px] text-xs p-2 outline-grey-light outline-none"
              placeholder="Nombre"
            />
            <input
              type="text"
              className="w-[75%] h-[30px] text-xs p-2 outline-grey-light outline-none"
              placeholder="Tu Email"
            />
            <textarea
              className="w-[75%] h-[130px] text-xs p-2 outline-grey-light outline-none"
              placeholder="Asunto"
            ></textarea>
            <button className="w-[75%] h-[30px] flex justify-center items-center text-sm p-2 text-white-light bg-grey-dark">
              Enviar
            </button>
          </form>
        </section>
      </section>
      <section className="h-[50%] flex justify-center items-center bg-[#1b1c21]">
        <section className="area relative flex justify-between items-end px-28 bg-limee-500 ">

          <section className="w-[50%] flex flex-col justify-center items-center bg-redd-500">
            <picture className="w-[150px] h-auto bg-greenn-500 pointer-events-none">
              <img src={logoJC} alt="" className="select-none" />
            </picture>
            <article>
              {/* <h2>Hola Como va</h2> */}
              <ul className="w-[100px] h-[50px] flex justify-center items-center space-x-10 transition-colors duration-500">
                <li>
                  <a target="_black" href="https://github.com/JuanJoseChambi" className="flex justify-center items-center text-grey-light hover:text-white-light transition-colors duration-500">
                    <i className="mr-2 bx bxl-github"></i>GitHub
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://mail.google.com/mail/u/0/?fs=1&to=chambijuanjose05@gmail.com&tf=cm" className="flex justify-center items-center text-grey-light hover:text-white-light transition-colors duration-500">
                    <i className="mr-2 bx bxl-gmail"></i>Gmail
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://www.linkedin.com/in/juanjosechambi" className="flex justify-center items-center text-grey-light hover:text-white-light transition-colors duration-500">
                    <i className="mr-2 bx bxl-linkedin-square"></i>Linkedin
                  </a>
                </li>
                <li>
                  <a target="_black" href="#" className="flex justify-center items-center text-grey-light hover:text-white-light transition-colors duration-500">
                    <i className="mr-2 bx bxl-twitter"></i>Twitter
                  </a>
                </li>
              </ul>
            </article>
          </section>
          
          <button className="w-40 h-[30px] mr-[150px] bg-black text-white-light rounded-sm">Inicio</button>
        
        </section>
      </section>
    </footer>
  );
}

export default Footer;
