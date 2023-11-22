// import logo from "../../../assets/assetsHeader/Logo 5 Transparent.png"
import logo from "../../../assets/assetsHeader/logoBien.png"

function Header() {
  return (
    <header className="area relative ">

      {/* <ul className="absolute right-0">
        <li>Linkedin</li>
        <li>Gmail</li>
        <li>Twiter</li>
        <li>GitHub</li>
      </ul> */}

      <section className="flex justify-center items-center flex-col">
        <picture className="w-[150px]">
            <img src={logo} alt="" className="w-full" />
        </picture>
        <h1 className="text-[#DCDEDD] text-7xl font-black tracking-wide drop-shadow-[15px_15px_6px_black]">JUAN JOSE CH</h1>
        <h2 className="text-[#DCDEDD] text-sm font-extralight mt-4">Desarrollador Frontend Junior</h2>
      </section>

      {/* <ul className="absolute right-0 bottom-0">
        <li>Contactsssssssssssssssssssso</li>
        <li>About</li>
      </ul> */}

    </header>
  );
}

export default Header;
