// import perfil from "../../../assets/assetsMain/Perfil.png"
import { useState } from "react"
import MMarket from "../../../assets/assetsMain/Proyects/MMarket.png"
import TN from "../../../assets/assetsMain/Proyects/TN.png"

function Proyectos() {
    const [cards, setCards] = useState([
        {id:1, image:MMarket},
        {id:2, image:MMarket},
        {id:3, image:TN},
        {id:4, image:MMarket},
        {id:5, image:MMarket},
        {id:6, image:MMarket},
        {id:6, image:MMarket},
    ])
    const [num, setNum] = useState(1)


    function nextCard () {
        if (cards.length -1 === num) {
            setNum(0)
        }else{
            setNum(num + 1)
        }
    }
    
    function prevCard () {
        if (num <= 0) {
            setNum(cards.length -1)
        }else{
            setNum(num - 1)
        }
    }
    
  return (
    <section className="area min-h-screen snap-center relative flex flex-col justify-center items-center text-white py-20 lg:py-0">
        <section className="bg-red-500 w-[1050px] h-full overflow-hidden lg:w-[1080px] lg:min-h-[450px] flex justify-center items-center space-y-9 lg:space-y-0 lg:space-x-9 flex-col lg:flex-row">

            <i onClick={prevCard} className='bg-red w-[25px] h-[25px] flex justify-center items-center absolute right-0 lg:left-0 cursor-pointer z-10 text-3xl bx bx-chevron-left'></i>

            {cards.map((card, i) => (
                <picture onClick={() => setNum(i)} key={card.id} className={`cards-opacity ${num === i? "min-h-[400px] min-w-[400px] grayscale-0 blur-none cursor-auto": null}`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1F2025]"></div>
                    <img src={card.image} alt="" />
                </picture>
            ))
            }

            <i onClick={nextCard} className='bg-red w-[25px] h-[25px] flex justify-center items-center absolute right-0 lg:right-0 cursor-pointer z-10 text-3xl bx bx-chevron-right' ></i>

        </section>  
        <section className="space-x-10 z-10">

        </section>
    </section>
  )
}

export default Proyectos