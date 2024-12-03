import { useState } from "react"
import CargoHeader from "../CargoHeader/CargoHeader"
import { CargoType, initCargoes } from "./cargo"
import CargoItem from "../CargoItem/Cargoitem"

const CargoList = () => {

  const [cargoes, setCargo] = useState<CargoType[]>(initCargoes)

    return (
        <table className="table">
  <CargoHeader/>
  <tbody>
    {cargoes.map(cargo => <CargoItem cargo={cargo} />)}
  </tbody>
</table>
    )
}
export default CargoList