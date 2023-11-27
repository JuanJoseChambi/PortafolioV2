import perfil from "../../../assets/assetsMain/Perfil.png";
import { useState } from "react";
import MMarket from "../../../assets/assetsMain/Proyects/MMarket.png";
import TN from "../../../assets/assetsMain/Proyects/TN.png";

interface Cards {
    id: number;
    imagenes: string;
    titulo: string;
    descripcion: string;
    front?: string;
    back?: string;
    db?: string;
    duracion: string;
    github: string;
    web?: string
}

function Proyectos() {
  const [num, setNum] = useState(3);
  const [cards, setCards] = useState<Cards[]>([
    { id: 0, imagenes: perfil, titulo:"Preoyecto 0", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose" },
    { id: 1, imagenes: MMarket , titulo:"Preoyecto 1", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"   },
    { id: 2, imagenes: TN , titulo:"Preoyecto 2", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"  } ,
    { id: 3, imagenes: perfil , titulo:"Preoyecto 3", descripcion:"MMarket simplifica compras en tiendas locales a través de su plataforma en línea, beneficiando a tiendas y usuarios con opciones de compra en persona y entregas a domicilio. Su objetivo es ampliar su alcance", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"   },
    { id: 4, imagenes: TN , titulo:"Preoyecto 4", descripcion:"Desarrollo de página web de recetas con más de 100 recetas detalladas. Los usuarios pueden agregar sus propias recetas, colaborar en una base de datos compartida y pudiendo marcar recetas como favoritas o eliminarlas.", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"  },
    { id: 5, imagenes: MMarket , titulo:"Preoyecto 5", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"   },
    { id: 6, imagenes: TN , titulo:"Preoyecto 6", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"},
    { id: 7, imagenes: perfil , titulo:"Preoyecto 7", descripcion:"Proyecto Muy Largoooooooo", front:"Javascript", duracion:"25 Jul - 25 Ago", github: "github.com/JuanJose"   },
]); 

  const renderCard = (card: Cards, i: number) => (
    <picture onClick={() => setNum(i)} key={card.id} className={`cards-opacity ${num === i ? "min-h-[390px] min-w-[400px] grayscale-0 blur-none cursor-auto pointer-events-none" : ""}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1F2025]"></div>
      <img src={card.imagenes} alt="Juan Jose Ch" className="select-none" />
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

      <section className="w-[60%] h-full overflow-hidden lg:w-[1080px] lg:min-h-[400px] flex justify-center items-center space-y-9 lg:space-y-0 lg:space-x-9 flex-col lg:flex-row bg-red-">
        {cards.map((card, i) => 
        i === num || i === num - 1 || i === num + 1 ? renderCard(card, i) : null 
        )}
      </section>
      <section className="w-[65%] h-[150px] pt-[40px] relative flex justify-center items-center flex-col bg-lime-500">
        {cards.map((card, i) => 
            i == num 
            ?
            <>
              <h2 className="absolute top-[-30px] text-6xl font-bold tracking-wider text-white-light">{card.titulo}</h2>
              <small className="text-center font-extralight">{card.descripcion}</small>
              <p>{card.duracion}</p>
              <p>{card.front}</p>
              <button>Ver Codigo</button>
            </> 
            : null
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