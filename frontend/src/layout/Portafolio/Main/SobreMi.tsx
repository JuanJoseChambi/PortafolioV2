import { useState } from "react"
import perfil from "../../../assets/assetsMain//SobreMi/sombraEntWebP.webp"
import { tecnologias} from "../../../assets/assetsMain/SobreMi/Tecnologias"


function SobreMi() {

  const [sombraHover, setSombraHover] = useState(false)


  function hanlderMouseEnter () {
    setSombraHover(true)
  }
  function handlerMouseLeave () {
    setSombraHover(false)
  }
  return (
    <section className="area h-[1100px] 2xl:h-px-screen-pc bg-lim-500 relative flex justify-center items-center snap-center text-white">
        <picture className="w-[450px] h-auto absolute bottom-0 flex justify-center items-center bg-lime-00 ">
          <div className={`absolute rounded-full w-full h-full transition-[background, transform, box-shadow] duration-500 ${sombraHover ? "bg-[#737373] shadow-[0px_0px_25px_1px_#737373]" : " bg-neutral-600"}`}></div>
          <img src={perfil} alt="" className="sombra w-full drop-shadow-[0px_30px_10px_black] hover:drop-shadow-[0px_40px_20px_black] hover:scale-105 transition-[scale, drop-shadow] duration-500 select-none" 
          onMouseEnter={hanlderMouseEnter} onMouseLeave={handlerMouseLeave}/>
        </picture>
        <section className="w-[485px] min-h-[400px] absolute left-0 flex flex-col justify-start space-y-4 items-center bg-redd-500">
            <article className="space-y-2">
              <h2 className="font-bold tracking-widest text-2xl w-full text-start drop-shadow-[6px_6px_3px_black]">SOBRE MI</h2>
              <p className="text-xs font-extralight">¡Hola! Soy Juan José, desarrollador fullstack junior con énfasis en frontend. Mi pasión por la programación nació en la secundaria y ha crecido constantemente. Autodidacta desde el principio, participé en bootcamps como SoyHenry, donde fortalecí habilidades técnicas y blandas como cooperación y aprendizaje rápido. Hoy, sigo siendo autodidacta, explorando tecnologías como MongoDB, TypeScript y Tailwind para seguir creciendo profesionalmente.</p>
            </article>
            <article className="space-y-2">
              <h2 className="font-bold tracking-widest text-2xl w-full text-start drop-shadow-[6px_6px_3px_black]">EDUCACION</h2>
              <article>
                <h3 className="w-full text-start font-semibold text-sm tracking-wider">SOYHENRY</h3>
                <p className="text-xs font-extralight">SoyHenry es un bootcamp integral de desarrollo web que forma para roles fullstack, enseñando habilidades técnicas en JavaScript, React, Node.js, PostgreSQL, y fomentando habilidades blandas como trabajo en equipo, aprendizaje rápido y resolución de problemas prácticos.</p>
              </article>
              <article>
                <h3 className="w-full text-start font-semibold text-sm tracking-wider">AUTODIDACTA</h3>
                <p className="text-xs font-extralight">A lo largo de mi aprendizaje, me sumergí autodidacta en la programación. Si bien SoyHenry reforzó conceptos previos, la experiencia autodidacta avivó mi deseo de explorar nuevas tecnologías y ampliar conocimientos en el ámbito fullstack.</p>
              </article>
            </article>
        </section>
        <section className="w-[400px] min-h-[400px] absolute right-0 flex flex-col justify-center items-center space-y-5 bg-redd-500">


              <h2 className="font-bold tracking-widest text-2xl w-full text-center drop-shadow-[6px_6px_3px_black]">HABILIDADES</h2>
              <section className="w-full flex flex-col justify-center items-center bg-redd-500 ">

                <section className="w-full text-center ">
                  <h2 className="text-sm font-semibold tracking-wider">TECNICAS</h2>
                  <article className="flex flex-row justify-evenly items-center flex-wrap">
                  {tecnologias.map((tec, i) => (
                    <section key={i} className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-md m-2 select-none hover:scale-125 hover:drop-shadow-[0px_5px_2px_black] transition-[transform, drop-shadow] duration-500 grayscale-[70%] hover:grayscale-0">
                    <div className="w-[30px] h-[30px] flex justify-center items-center pointer-events-none ">{tec.img}</div>
                    <p className="text-[10px] font-extralight">{tec.nombre}</p>
                 </section>
                  ))}
                  </article>    
                </section>

                <section className="w-full flex flex-col justify-start items-center text-center space-y-2">
                  <h2 className="text-sm font-semibold tracking-wider">BLANDAS</h2>
                  <article className="flex text-xs font-extralight space-x-4">
                    <article className="space-y-5 bg-redd-500">
                      <p>Adaptabilidad</p>
                      <p>Aprendizaje Agil</p>
                    </article>
                    <article className="space-y-5 bg-redd-500">
                      <p>Autodidacta</p>
                      <p>Trabajo en Equipo</p>
                      {/* <p>Cooperacion</p> */}
                    </article>
                    <article className="space-y-5 bg-redd-500">
                      <p>Curiosidad</p>
                      <p>Perseverancia</p>
                    </article>
                  </article>
                </section>

              </section>

            <section>

            </section>

        </section>
    </section>
  )
}

export default SobreMi