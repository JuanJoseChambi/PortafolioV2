// import perfil from "../../../assets/assetsMain/Perfil.png"
import MMarket from "../../../assets/assetsMain/Proyects/MMarket.png"
import TN from "../../../assets/assetsMain/Proyects/TN.png"

function Proyectos() {
  return (
    <section className="area min-h-screen snap-center flex justify-center items-center text-white py-20 lg:py-0">
        <section className="w-[1050px] min-h-[450px]  flex flex-wrap justify-center items-center space-y-9 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row ">

            <picture className="cards-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#252629]"></div>
                <img src={MMarket} alt="" />
            </picture>

            <picture className="cards-opacity ">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#252629]"></div>
                <img src={MMarket} alt="" className="" />
            </picture>
            <picture className="cards-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#232329]"></div>
                <img src={TN} alt="" className=""/>
            </picture>
        </section>  

        <section>
            <article>
                dsad
            </article>
        </section>
    </section>
  )
}

export default Proyectos