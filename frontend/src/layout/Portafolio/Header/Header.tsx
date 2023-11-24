import { useContext, useEffect, useRef } from "react";
import logo from "../../../assets/assetsHeader/logoJC.png"
import ContextSharedRef from "../../../utils/Contexts/ContextSharedRef";

function Header() {

  const headerRef = useRef<HTMLHeadingElement | null>(null)

  const context = useContext(ContextSharedRef);

  if (!context) {
    return null
  }
  const { setLine } = context

  useEffect(() => {
    console.log(setLine);

    if (headerRef.current) {
      setLine(true)
    }else{
      setLine(false)
    }
  }, [headerRef.current])

  return (
    <header className="area flex justify-center items-center h-screen relative snap-center" ref={headerRef}>

      <section className="flex justify-center items-center flex-col w-full h-full ">
        <picture className="w-[150px] select-none ">
            <img src={logo} alt="" className="w-full drop-shadow-[10px_10px_6px_black] pointer-events-none" />
        </picture>
        <p className="text-grey-dark font-semibold text-sm mr-[290px] tracking-widest select-none">SOY</p>
        <h1 className="text-white-light text-7xl font-black tracking-wide drop-shadow-[15px_15px_8px_black] select-none my-6">JUAN JOSE CH</h1>
        <p className="text-grey-dark text-xs font-semibold select-none w-[150px] ml-[145px] tracking-wide ">UN DESARROLLADOR FULLSTACK JUNIOR</p>
      </section>

    </header>
  );
}

export default Header;


// text-shadow: drop-shadow-[0px_8px_5px_black]
