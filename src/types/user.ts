type UserGeoType = {
  lat: string;
  lng: string;
}

type UserAdressType = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: UserGeoType;
};

type UserCompanyType = {
  bs: string;
  name: string;
  catchPhrase: string;
}


export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: number;
  website: string;
  adress: UserAdressType;
  company: UserCompanyType;
}

export type UsersResponseType = Array<IUser>;