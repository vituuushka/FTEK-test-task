import { useState } from "react"
import CargoHeader from "../CargoHeader/CargoHeader"
import { CargoStatus, CargoType, initCargoes } from "./cargo"
import CargoItem from "../CargoItem/Cargoitem"
import CargoForm from "../AddCargoForm/AddCargoForm"

export type CargoDTOType = {
  name: string,
    status: CargoStatus,
    origin: string,
    destination: string,
    departureDate: string
}
const CargoList = () => {

  const [cargoes, setCargo] = useState<CargoType[]>(initCargoes)
  const addNewCargo = (cargoDTO:CargoDTOType) => {
    const cargoId = cargoes.length
    const newCargo = { id: cargoId, ...cargoDTO };
    const newCargoes = [...cargoes, newCargo]
    setCargo(newCargoes)
  }
    return (
      <div>
      <CargoForm addNewCargo={addNewCargo} cargoes={cargoes} />
        <table className="table">
  <CargoHeader/>
  <tbody>
    {cargoes.map(cargo => <CargoItem cargo={cargo} />)}
  </tbody>
</table>
</div>
    )
}
export default CargoList