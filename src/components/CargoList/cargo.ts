export type CargoType = {
    id: number,
    name: string,
    status: CargoStatus,
    origin: string,
    destination: string,
    departureDate: string 
}

export enum CargoStatus {
  sendAwaiting = "Ожидает отправки",
  inProgress = "В пути",
  done = "Доставлен"
}


export const initCargoes: CargoType[] = [
    {
        id: 1,
        name: "Строительные материалы",
        status: CargoStatus.inProgress,
        origin: "Москва",
        destination: "Казань",
        departureDate: "2024-11-24"
      },
      {
        id: 2,
        name: "Хрупкий груз",
        status: CargoStatus.sendAwaiting,
        origin: "Санкт-Петербург",
        destination: "Екатеринбург",
        departureDate: "2024-11-26"
      }
    
]