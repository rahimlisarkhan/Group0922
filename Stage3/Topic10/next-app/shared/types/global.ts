// Union type
type Role = 'ADMIN' | 'EMPLOYEE';
type num1 = number | string;

type CORD = [40, 49]; //Tuple

// ENUM
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

//TYPE
export type User = {
  id: number;
  img_url: string | null;
  phone: string | null;
  gender: Gender;
};

// INTERFACE
export interface IProfile {
  id: number;
  img_url: string | null;
  phone: string | null;
  desc: string;
  gender: Gender;
  cordinates: CORD;
}

export interface IAdminProfile extends User {
  is_staff: boolean;
  expire_time: string;
}

interface IAddress {
  street: string;
  city: string;
}

type A = {
  age?: number;
};

type B = {
  address: IAddress[];
};

// type C = A & B;

const myObj: A = {
  age: 14,
};

const b: number = myObj.age as number;

function sum(b?: number) {
  if (!b) return 0;
}

sum(myObj.age);

// const data: C = {
//   age: 45,
//   address: [
//     {
//       street: 'dsd',
//       city: 'New York',
//     },
//   ],
// };

// if (Gender.FEMALE == profile.gender) {
// }
