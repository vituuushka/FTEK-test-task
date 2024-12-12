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
    useState<Boolean>(true);

  const [cargoes, setCargo] = useState<CargoType[]>(initCargoes);

  const addNewCargo = (cargoDTO: CargoDTOType) => {
    const cargoId = cargoes.length + 1;
    const newCargo = { id: cargoId, ...cargoDTO };
    const newCargoes = [...cargoes, newCargo];
    setCargo(newCargoes);
    setIsAddCargoFormShowed(false);
  };
  const changeCargo = (cargoId: number, newStatus: CargoStatus) => {
    const changedCargoes = cargoes.map((cargo) => {
      if (cargo.id === cargoId) {
        return {
          ...cargo,
          status: newStatus,
        };
      }

      return cargo;
    });
    setCargo(changedCargoes);
  };
  return (
    <div>
      <CargoForm addNewCargo={addNewCargo} cargoes={cargoes} />

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
