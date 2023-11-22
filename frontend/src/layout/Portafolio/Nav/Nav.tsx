import logo from "../../../assets/assetsHeader/logoJC.png"
function Nav() {
  return (
    <nav className="area absolute top-0">

      <section className="flex justify-between items-center py-2">

        <picture className="top-0 flex w-[65px] select-none">
          <img src={logo} alt="" className="w-full pointer-events-none"/>
        </picture>

        <ul className="flex space-x-8 font-semibold tracking-widest text-[10px] text-[#9b9b9b] transition-colors duration-500">
          <li className="cursor-pointer hover:text-whiteText  transition-colors duration-300">SOBRE MI</li>
          <li className="cursor-pointer hover:text-whiteText  transition-colors duration-300">TECNOLOGIAS</li>
          <li className="cursor-pointer hover:text-whiteText  transition-colors duration-300">PROYECTOS</li>
          <li className="cursor-pointer hover:text-whiteText  transition-colors duration-300">CONTACTO</li>
        </ul>

      </section>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Nav