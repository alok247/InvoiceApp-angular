
export interface UserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  street: string;
  postcode: string;
  city: string;
  nip: string;
  regon: string;
  active: boolean;
}

export interface UserSimpleDto {
  id: number;
  name: string;
  email: string;
}
