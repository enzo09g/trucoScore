import { useState } from "react";
import { Minus, Plus } from "./Svg";
import { Tanteador } from "./Tanteador";

export function Tablero() {
  const [TantosJugador1, SetTantosJugador1] = useState(0);
  const [TantosJugador2, SetTantosJugador2] = useState(0);

  const handleAumentarPuntosP1 = () => {
    SetTantosJugador1((ValorAnterior) => {
      return ValorAnterior + 1;
    });
  };

  const handleDisminuirPuntosP1 = () => {
    SetTantosJugador1((ValorAnterior) => {
      console.log(ValorAnterior + 1);
      return ValorAnterior - 1;
    });
  };

  const handleAumentarPuntosP2 = () => {
    SetTantosJugador2((ValorAnterior) => {
      return ValorAnterior + 1;
    });
  };

  const handleDisminuirPuntosP2 = () => {
    SetTantosJugador2((ValorAnterior) => {
      console.log(ValorAnterior + 1);
      return ValorAnterior - 1;
    });
  };

  return (
    <>
      <div className="p-4 relative z-10 min-h-screen text-white flex font-universal text-center flex-col">
        <div className="flex">
          <div className="grow shrink-0 basis-0">
            <h1 className="uppercase italic tracking-widest">primer equipo</h1>
          </div>
          <div className="grow shrink-0 basis-0">
            <h1 className="uppercase italic tracking-widest">
              El tremendo equipo numero 2
            </h1>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="grow shrink-0 basis-0 border-r border-white pr-4">
            <Tanteador InitialTantos={TantosJugador1} />
          </div>
          <div className="grow shrink-0 basis-0 pl-4">
            <Tanteador InitialTantos={TantosJugador2} />
          </div>
        </div>

        <div className="fixed bottom-0 p-2 z-[100] bg-black opacity-50 left-0 grow shrink w-full flex">
          <div className="grow shrink-0 basis-0 flex justify-center gap-10">
            <button onClick={handleAumentarPuntosP1} className="cursor-pointer">
              <Plus />
            </button>
            <button
              onClick={handleDisminuirPuntosP1}
              className="cursor-pointer"
            >
              <Minus />
            </button>
          </div>
          <div className="grow shrink-0 basis-0 flex justify-center gap-10">
            <button onClick={handleAumentarPuntosP2} className="cursor-pointer">
              <Plus />
            </button>
            <button
              onClick={handleDisminuirPuntosP2}
              className="cursor-pointer"
            >
              <Minus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
