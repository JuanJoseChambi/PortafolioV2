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
    <section className="area min-h-[1050px] bg-redd-500 flex flex-col justify-evenly items-center snap-center bg-redd-500 text-white">

        <section className="w-[80%] h-[25%] flex flex-col justify-center items-center space-y-4 bg-greeen-500">
            <article className="space-y-2 text-center">
              <h2 className="font-bold tracking-widest text-2xl drop-shadow-[6px_6px_3px_black]">SOBRE MI</h2>
              <p className="text-xs font-extralight">¡Hola! Soy Juan José, desarrollador fullstack junior con énfasis en frontend. Mi pasión por la programación nació en la secundaria y ha crecido constantemente. Autodidacta desde el principio, participé en bootcamps como SoyHenry, donde fortalecí habilidades técnicas y blandas como cooperación y aprendizaje rápido. Hoy, sigo siendo autodidacta, explorando tecnologías como MongoDB, TypeScript y Tailwind para seguir creciendo profesionalmente.</p>
            </article>
        </section>

        <section className="w-full h-[50%] flex flex-col lg:flex-row justify-between items-center bg-bluee-500">

          <section className="w-[90%] lg:w-[30%] py-10 lg:h-[220px] lg:py-0 flex flex-col justify-center lg:justify-start items-center space-y-5 bg-limee-500">   

            <section className="w-full text-center ">
              <h2 className="text-sm font-semibold tracking-wider">HABILIDADES TECNICAS</h2>
              <article className="flex flex-row justify-evenly items-center flex-wrap">
              {tecnologias.map((tec, i) => (
                <section key={i} className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-md m-2 select-none hover:scale-125 hover:drop-shadow-[0px_5px_2px_black] transition-[transform, drop-shadow] duration-500 grayscale-[70%] hover:grayscale-0">
                <div className="w-[30px] h-[30px] flex justify-center items-center pointer-events-none ">{tec.img}</div>
                <p className="text-[10px] font-extralight">{tec.nombre}</p>
             </section>
              ))}
              </article>    
            </section>
            
          </section>
              
          <picture className="w-[70%] lg:w-[35%] h-auto relative flex justify-center items-center z-10 bg-redd-500 ">
            <div className={`absolute rounded-full w-full h-full transition-[background, transform, box-shadow] duration-500 ${sombraHover ? "bg-[#737373] shadow-[0px_0px_25px_1px_#737373]" : " bg-neutral-600"}`}></div>
            <img src={perfil} alt="JC Juan Jose Chambi" className="sombra w-full drop-shadow-[0px_30px_10px_black] hover:drop-shadow-[0px_40px_20px_black] hover:scale-105 transition-[scale, drop-shadow] duration-500 select-none rounded-full" 
            onMouseEnter={hanlderMouseEnter} onMouseLeave={handlerMouseLeave}/>
          </picture>

          <section className="w-[90%] lg:w-[30%] py-10 lg:h-[220px] lg:py-0 flex flex-col justify-center lg:justify-start items-center space-y-5 bg-limee-500">   
              
            <section className="w-full flex flex-col justify-start items-center text-center space-y-2">
              <h2 className="text-sm font-semibold tracking-wider">HABILIDADES BLANDAS</h2>
              <article className="flex flex-wrap text-xs font-extralight space-x-4">
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

        </section>

        <section className="w-[80%] h-[25%] flex flex-col justify-center items-center space-y-4 bg-greeen-500">
            <article className="space-y-5 text-center">
              <h2 className="font-bold tracking-widest text-2xl drop-shadow-[6px_6px_3px_black]">EDUCACION</h2>
              <article>
                <h3 className="font-semibold text-sm tracking-wider">SOYHENRY</h3>
                <p className="text-xs font-extralight">SoyHenry es un bootcamp integral de desarrollo web que forma para roles fullstack, enseñando habilidades técnicas en JavaScript, React, Node.js, PostgreSQL, y fomentando habilidades blandas como trabajo en equipo, aprendizaje rápido y resolución de problemas prácticos.</p>
              </article>
              <article>
                <h3 className="font-semibold text-sm tracking-wider">AUTODIDACTA</h3>
                <p className="text-xs font-extralight">A lo largo de mi aprendizaje, me sumergí autodidacta en la programación. Si bien SoyHenry reforzó conceptos previos, la experiencia autodidacta avivó mi deseo de explorar nuevas tecnologías y ampliar conocimientos en el ámbito fullstack.</p>
              </article>
            </article>
        </section>
        

    </section>
  )
}

export default SobreMi