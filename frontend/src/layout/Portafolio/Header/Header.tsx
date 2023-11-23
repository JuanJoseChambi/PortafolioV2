import logo from "../../../assets/assetsHeader/logoJC.png"

function Header() {
  return (
    <header className="area relative">

      <section className="flex justify-center items-center flex-col ">
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
