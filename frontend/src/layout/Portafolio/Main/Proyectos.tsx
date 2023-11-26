import perfil from "../../../assets/assetsMain/Perfil.png";
import { useState } from "react";
import MMarket from "../../../assets/assetsMain/Proyects/MMarket.png";
import TN from "../../../assets/assetsMain/Proyects/TN.png";

interface Cards {
    id: number;
    image: string;
}

function Proyectos() {
  const [num, setNum] = useState(3);
  const [cards, setCards] = useState<Cards[]>([
    { id: 0, image: perfil },
    { id: 1, image: MMarket },
    { id: 2, image: TN },
    { id: 3, image: perfil },
    { id: 4, image: TN },
    { id: 5, image: MMarket },
    { id: 6, image: TN },
    { id: 7, image: perfil },
]);

  const renderCard = (card: Cards, i: number) => (
    <picture onClick={() => setNum(i)} key={card.id} className={`cards-opacity ${num === i ? "min-h-[400px] min-w-[400px] grayscale-0 blur-none cursor-auto pointer-events-none" : ""}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1F2025]"></div>
      <img src={card.image} alt="Juan Jose Ch" className="select-none" />
    </picture>
  );
  function handlerNextCard() {
    setNum((num + 1) % cards.length);
  }

  function handlerPrevCard() {
    setNum((num - 1 + cards.length) % cards.length);
  }

    console.log(num );

  return (
    <section className="area min-h-screen snap-center relative flex flex-col justify-center items-center text-white py-20 lg:py-0">
      <i
        onClick={handlerPrevCard}
        className="bg-red w-[25px] h-[25px] flex justify-center items-center absolute right-0 lg:left-0 cursor-pointer z-10 text-3xl bx bx-chevron-left"
      ></i>

      <section className="bg-red- w-[1050px] h-full overflow-hidden lg:w-[1080px] lg:min-h-[450px] flex justify-center items-center space-y-9 lg:space-y-0 lg:space-x-9 flex-col lg:flex-row">
        {cards.map((card, i) => 
        i === num || i === num - 1 || i === num + 1 || (num === 0 && i === cards.length - 1) || (num === cards.length - 1 && i === 0) ? renderCard(card, i) : null 
         )}
      </section>

      <i
        onClick={handlerNextCard}
        className="bg-red w-[25px] h-[25px] flex justify-center items-center absolute right-0 lg:right-0 cursor-pointer z-10 text-3xl bx bx-chevron-right"
      ></i>

      <section className="space-x-10 z-10"></section>
    </section>
  );
}

export default Proyectos;