import { useState } from "react";
import CargoHeader from "../CargoHeader/CargoHeader";
import { CargoStatus, CargoType, initCargoes } from "./cargo";
import CargoItem from "../CargoItem/CargoItem";
import CargoForm from "../AddCargoForm/AddCargoForm";

export type CargoDTOType = {
  name: string;
  status: CargoStatus;
  origin: string;
  destination: string;
  departureDate: string;
};
const CargoList = () => {
  const [isAddCargoFormShowed, setIsAddCargoFormShowed] =
    useState<Boolean>(false);

  const [cargoes, setCargo] = useState<CargoType[]>(initCargoes);

  const addNewCargo = (cargoDTO: CargoDTOType) => {
    const cargoId = cargoes.length+1;
    const newCargo = { id: cargoId, ...cargoDTO };
    const newCargoes = [...cargoes, newCargo];
    setCargo(newCargoes);
    setIsAddCargoFormShowed(false);
  };
  const changeCargo = (cargoId:number, newStatus: CargoStatus) => {
    debugger
    const changedCargoes = cargoes.map(cargo => {
      if (cargo.id===cargoId) {
        return {
          ...cargo, status: newStatus
        }
      }

      return cargo
    })
    debugger
    setCargo(changedCargoes)
  }
  return (
    <div>
      {isAddCargoFormShowed && (
        <CargoForm addNewCargo={addNewCargo} cargoes={cargoes} />
      )}
      <button
        onClick={() => {
          setIsAddCargoFormShowed(true);
        }}
      >
        Добавить новый груз
      </button>
      <table className="table">
        <CargoHeader />
        <tbody>
          {cargoes.map((cargo) => (
            <CargoItem changeCargo={changeCargo} cargo={cargo} key={cargo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CargoList;
