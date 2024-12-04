import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CargoStatus, CargoType } from "../CargoList/cargo";
import { CargoDTOType } from "../CargoList/CargoList";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap, { Modal } from "bootstrap";
import { useRef, useState } from "react";

type CargoFormPropsType = {
  cargoes: CargoType[];
  addNewCargo: (cargoDTO: CargoDTOType) => void;
};

const cityNames: string[] = ["Москва", "Самара", "Екатеринбург"];
const CargoForm = (props: CargoFormPropsType) => {
  const { control, register, handleSubmit, formState, reset } =
    useForm<CargoType>();

  let myModal: Modal;

  const closeForm = () => {
    reset();
    myModal.hide();
  };

  const onSubmit: SubmitHandler<CargoType> = (data) => {
    props.addNewCargo(data);
    closeForm();
    reset();
  };

  const openForm = () => {
    if (!myModal) {
      const modalContainer = document.getElementById("formModal");
      if (modalContainer) {
        myModal = new Modal(modalContainer, {
          backdrop: "static",
          keyboard: false,
        });
      }
    }

    myModal?.show();
  };

  return (
    <div>
      <button type="button" className="btn btn-primary mt-3" onClick={openForm}>
        Добавить новый груз
      </button>

      <div
        className="modal"
        id="formModal"
        tabIndex={-1}
        aria-labelledby="formModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="formModalLabel">
                Заполните форму для создания нового груза
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeForm}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Название:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Название..."
                    {...register("name", {
                      required: "Обязательное поле",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="origin" className="form-label">
                    Пункт отправления:
                  </label>
                  <Controller
                    name="origin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select className="form-control" {...field} id="dropdown">
                        <option value="" disabled>
                          Выберите...
                        </option>
                        {cityNames.map((cityName) => (
                          <option
                            key={cityNames.indexOf(cityName)}
                            value={cityName}
                          >
                            {cityName}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">
                    Пункт назначения:
                  </label>
                  <Controller
                    name="destination"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select className="form-control" {...field} id="dropdown">
                        <option value="" disabled>
                          Выберите...
                        </option>
                        {cityNames.map((cityName) => (
                          <option
                            key={cityNames.indexOf(cityName)}
                            value={cityName}
                          >
                            {cityName}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="departureDate" className="form-label">
                    Дата отправления:
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    className="form-control"
                    placeholder="Название..."
                    {...register("departureDate", {
                      required: "Обязательное поле",
                    })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Начальный статус:
                  </label>
                  <Controller
                    name="status"
                    control={control}
                    defaultValue={CargoStatus.sendAwaiting}
                    render={({ field }) => (
                      <select className="form-control" {...field} id="dropdown">
                        <option value={CargoStatus.sendAwaiting} disabled>
                          Ожидает отправки
                        </option>
                      </select>
                    )}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CargoForm;
