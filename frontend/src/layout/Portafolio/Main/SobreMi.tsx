import perfil from "../../../assets/assetsMain//SobreMi/sombraEnt.png"


function SobreMi() {
  return (
    <section className="area h-screen relative flex justify-center items-center snap-center text-white bg-re-500">
        <picture className="w-[500px] h-auto absolute bottom-0 flex justify-center items-center bg-lime-00">
          <img src={perfil} alt="" className="w-full drop-shadow-[0px_14px_10px_black]"/>
        </picture>
        <section className="w-[450px] min-h-[500px] absolute left-0 flex flex-col justify-center space-y-3 items-center bg-redd-500">
            <article>
              <h2 className="font-semibold text-2xl w-full text-start">SOBRE MI</h2>
              <p className="text-xs font-extralight">¡Hola! Soy Juan José, desarrollador fullstack junior con énfasis en frontend. Mi pasión por la programación nació en la secundaria y ha crecido constantemente. Autodidacta desde el principio, participé en bootcamps como SoyHenry, donde fortalecí habilidades técnicas y blandas como cooperación y aprendizaje rápido. Hoy, sigo siendo autodidacta, explorando tecnologías como MongoDB, TypeScript y Tailwind para seguir creciendo profesionalmente.</p>
            </article>
            <article>
              <h2 className="font-semibold text-2xl w-full text-start">FROMACION ACADEMICA</h2>
              <h3 className="w-full text-start">SOYHENRY</h3>
              <p className="text-xs font-extralight">SoyHenry es un bootcamp integral de desarrollo web que forma para roles fullstack, enseñando habilidades técnicas en JavaScript, React, Node.js, PostgreSQL, y fomentando habilidades blandas como trabajo en equipo, aprendizaje rápido y resolución de problemas prácticos.</p>
              <h3 className="w-full text-start">AUTODIDACTA</h3>
              <p className="text-xs font-extralight">A lo largo de mi aprendizaje, me sumergí autodidacta en la programación. Si bien SoyHenry reforzó conceptos previos, la experiencia autodidacta avivó mi deseo de explorar nuevas tecnologías y ampliar conocimientos en el ámbito fullstack.</p>
            </article>
        </section>
        <section className="w-[400px] min-h-[500px] absolute right-0 flex justify-center items-center bg-red-500">
            <h2>HOLA QUE TAL! SOY JUAN JOSE</h2>
            <h3>Desarrollador Fullstack</h3>
            <p></p>
        </section>
    </section>
  )
}

export default SobreMi