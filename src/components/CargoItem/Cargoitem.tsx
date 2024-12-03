import { CargoType, CargoStatus } from "../CargoList/cargo"
import EditableCargoStatus from "./CargoStatus/CargoStatus"

type CargoItemPropsType = {
  cargo: CargoType,
  key: number,
  changeCargo: (cargoId:number, newStatus: CargoStatus) => void
}

const CargoItem = (props:CargoItemPropsType ) => {

  const cargo = props.cargo
    return (
        <tr>
      <td>CARG{String(cargo.id)}</td>
      <td>{cargo.name}</td>
      <td>
        <EditableCargoStatus changeStatus={(status: CargoStatus) => {
          props.changeCargo(cargo.id, status)
        }} currStatus={cargo.status} />
      </td>
      <td>{cargo.origin} - {cargo.destination}</td>
      <td>{cargo.departureDate}</td> 
    </tr>
    )
}

export default CargoItem