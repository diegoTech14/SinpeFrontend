export interface Movement {
  date: string;
  hour: string;
  phone: string;
  name: string;
  description: string;
  id: string;
  ammount: number;
}

export interface Contact {
  name: string;
  phone: string;
  balance: number;
  movements: Movement[];
}

export interface Movements {
  movements: Movement[];
}

export interface FirstContact {
  phone: string;
  name: string;
  balance: number;
}

export interface Sinpe {
  phoneSend: string;
  phoneReceive: string;
  ammount: number;
  detail: string;
}

export interface MovementDetailObject {
  phone: string,
  movementId: string
}
