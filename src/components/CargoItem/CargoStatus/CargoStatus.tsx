import { CargoStatus } from "../../CargoList/cargo";

const allStatuses = [
  CargoStatus.done,
  CargoStatus.inProgress,
  CargoStatus.sendAwaiting,
];

const statusToColor = new Map<CargoStatus, String>([
    [CargoStatus.done, "btn-success"],
    [CargoStatus.inProgress, "btn-primary"],
    [CargoStatus.sendAwaiting, "btn-warning"],
])

const EditableCargoStatus = (props: { 
    currStatus: CargoStatus,
    changeStatus: (status: CargoStatus) => void

 }) => {
  const allOtherStatuses = allStatuses.filter(
    (status) => status != props.currStatus
  );

  const colorClass = statusToColor.get(props.currStatus)
  return (
    <div className="dropdown">
      <button
        className={"btn dropdown-toggle "+colorClass}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.currStatus}
      </button>
      <ul className="dropdown-menu">
        {allOtherStatuses.map((status) => (
          <li onClick={()=> props.changeStatus(status)} >
            <a className="dropdown-item" href="#">
              {status}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditableCargoStatus;
