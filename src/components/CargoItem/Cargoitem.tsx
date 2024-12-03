import { CargoType } from "../CargoList/cargo"

type CargoItemPropsType = {
  cargo: CargoType
}

const CargoItem = (props:CargoItemPropsType ) => {
  const cargo = props.cargo
    return (
        <tr>
      <td>{cargo.id}</td>
      <td>{cargo.name}</td>
      <td>{cargo.status}</td>
      <td>{cargo.origin} - {cargo.destination}</td>
      <td>{cargo.departureDate}</td>
    </tr>
    )
}

export default CargoItem