import { useEffect, useState } from "react"
import PropTypes from 'prop-types';


export function Tanteador({ InitialTantos }) {

    const calcularPuntaje = (puntaje) => {
        const resultado = puntaje % 5;
        return resultado === 0 && puntaje !== 0 ? 5 : resultado
    }

    const [Tantos, SetTantos] = useState(InitialTantos)

    useEffect(() => {
        SetTantos(InitialTantos)
    }, [InitialTantos])

    const cantidadRepeticiones = Tantos > 5 ? Math.floor((Tantos - 1) / 5) : 0;
    const srcNumero = calcularPuntaje(Tantos)

    const fotoSrc = `src/Img/fosforos/${srcNumero} palito.png`
    const fotoSrc5 = `src/Img/fosforos/5 palito.png`

    return (
        <div className="w-full mt-8 min-h-24 bg-gray-100 opacity-80 rounded-3xl shadow-2xl backdrop-blur-xl flex overflow-x-hidden flex-wrap">
            <div className="w-16">
                <img className="min-w-full" src={fotoSrc} alt="" />
            </div>
            {[...Array(cantidadRepeticiones)].map((_, index) => (
                <div key={index} className="w-16">
                    <img className="min-w-full" src={fotoSrc5} alt="" />
                </div>
            ))}

        </div>
    )
}

Tanteador.propTypes = {
    InitialTantos: PropTypes.number.isRequired
}

