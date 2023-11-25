// import perfil from "../../../assets/assetsMain/Perfil.png"
import { useState } from "react"
import MMarket from "../../../assets/assetsMain/Proyects/MMarket.png"
import TN from "../../../assets/assetsMain/Proyects/TN.png"

function Proyectos() {
    const [cards, setCards] = useState([
        {id:1, image:MMarket},
        {id:2, image:MMarket},
        {id:3, image:TN}
    ])
    const [num, setNum] = useState(1)


    function nextCard () {
        if (cards.length -1 === num) {
            setNum(0)
        }else{
            setNum(num + 1)
        }
    }
    console.log(cards.length -1);
    
    function prevCard () {
        if (num <= 0) {
            setNum(cards.length -1)
        }else{
            setNum(num - 1)
        }
    }
    
  return (
    <section className="area min-h-screen snap-center flex flex-col justify-center items-center text-white py-20 lg:py-0">
        <section className="w-[1050px] min-h-[450px]  flex flex-wrap justify-center items-center space-y-9 lg:space-y-0 lg:space-x-5 flex-col lg:flex-row " id="carusel">

        {cards.map((card, i) => (
            <picture key={card.id} className={`cards-opacity ${num === i? "h-[400px] w-[400px] grayscale-0 blur-none": null}`}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1F2025]"></div>
                <img src={card.image} alt="" />
            </picture>
        ))
        }

        </section>  
        <section className="space-x-10 z-10">
            <button onClick={nextCard} className="cursor-pointer">Siguiente</button>
            <button onClick={prevCard} className="cursor-pointer">Atras</button>
        </section>
    </section>
  )
}

export default Proyectos