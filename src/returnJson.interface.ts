export interface returnJson {
  name: string;
  mobile: number;
  code?: number;
}

export interface Register {
  name: string;
  gender: string;
  mobile: number;
  password: string;
}

export interface Login {
  mobile: number;
  password: string;
}
