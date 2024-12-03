import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { CargoStatus, CargoType } from "../CargoList/cargo"
import { CargoDTOType } from "../CargoList/CargoList"

type CargoFormPropsType = {
    cargoes: CargoType[],
    addNewCargo: (cargoDTO:CargoDTOType) => void
}
const CargoForm = (props: CargoFormPropsType) => {
    const {
        control,
        register,
        handleSubmit,
        formState,
      } = useForm<CargoType>()
      const onSubmit: SubmitHandler<CargoType> = (data) => {
        props.addNewCargo(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Название:</label>
            <input type="text"
            placeholder="Название..."
            {...register("name", { 
                required: "Обязательное поле"
            })}/>
            <div>
        <label htmlFor="origin">Пункт отправления:</label>
        <Controller
          name="origin"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} id="dropdown">
              <option value="" disabled>Выберите...</option>
              <option value="Москва">Москва</option>
              <option value="Самара">Самара</option>
            </select>
          )}
        />
      </div>
            <div>
        <label htmlFor="destination">Пункт назначения:</label>
        <Controller
          name="destination"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select {...field} id="dropdown">
              <option value="" disabled>Выберите...</option>
              <option value="Москва">Москва</option>
              <option value="Самара">Самара</option>
            </select>
          )}
        />
      </div>
      <label htmlFor="departureDate">Дата отправления:</label>
      <input type="date"
            placeholder="Название..."
            {...register("departureDate", { 
                required: "Обязательное поле"
            })}/>
        <div>
        <label htmlFor="status">Начальный статус:</label>
        <Controller
          name="status"
          control={control}
          defaultValue={CargoStatus.sendAwaiting}
          render={({ field }) => (
            <select {...field} id="dropdown">
              <option value={CargoStatus.sendAwaiting} disabled>Ожидает отправки</option>
            </select>
          )}
        />
      </div>
    <button type="submit">Отправить</button>
        </form>
    )
}
export default CargoForm