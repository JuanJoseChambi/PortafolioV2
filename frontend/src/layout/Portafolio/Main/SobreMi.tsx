import perfil from "../../../assets/assetsMain//SobreMi/sombraEnt.png"
import { tecnologias} from "../../../assets/assetsMain/SobreMi/Tecnologias"


function SobreMi() {
  return (
    <section className="area h-screen relative flex justify-center items-center snap-center text-white bg-re-500">
        <picture className="w-[450px] h-auto absolute bottom-0 flex justify-center items-center bg-lime-00">
          <img src={perfil} alt="" className="w-full drop-shadow-[0px_14px_10px_black]"/>
        </picture>
        <section className="w-[485px] min-h-[400px] absolute left-0 flex flex-col justify-start space-y-4 items-center bg-redd-500">
            <article className="space-y-2">
              <h2 className="font-bold tracking-widest text-1xl w-full text-start drop-shadow-[6px_6px_3px_black]">SOBRE MI</h2>
              <p className="text-xs font-extralight">¡Hola! Soy Juan José, desarrollador fullstack junior con énfasis en frontend. Mi pasión por la programación nació en la secundaria y ha crecido constantemente. Autodidacta desde el principio, participé en bootcamps como SoyHenry, donde fortalecí habilidades técnicas y blandas como cooperación y aprendizaje rápido. Hoy, sigo siendo autodidacta, explorando tecnologías como MongoDB, TypeScript y Tailwind para seguir creciendo profesionalmente.</p>
            </article>
            <article className="space-y-2">
              <h2 className="font-bold tracking-widest text-1xl w-full text-start drop-shadow-[6px_6px_3px_black]">EDUCACION</h2>
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
        <section className="w-[550px] min-h-[400px] absolute right-0 flex flex-col justify-start items-center">
            <h2>HABILIDADES</h2>
            <section className="w-full flex justify-between items-center  ">
              <article className="w-[70%] text-center ">
                <h2>TECNICAS</h2>
                <section className="flex flex-row justify-evenly flex-wrap space-y-2">
                {tecnologias.map((tec, i) => (
                  <section key={i} className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-md shadow-md p-2 m-2">
                  <div className="w-[30px] h-[30px] flex justify-center items-center ">{tec.img}</div>
                  <p className="text-[10px] tracking-wider font-extralight">{tec.nombre}</p>
               </section>
                ))}
                </section>
                
      
              </article>
              <article className="w-[30%] bg-blue-500 text-center ">
                <h2>BLANDAS</h2>
                <p></p>
              </article>
            </section>
            <p></p>
        </section>
    </section>
  )
}

export default SobreMi