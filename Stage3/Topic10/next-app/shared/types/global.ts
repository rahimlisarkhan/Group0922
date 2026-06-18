import { HttpStatusCode } from 'axios';
import { Blog } from './blog';
import { Album } from './album';

// Union type
// type Role = 'ADMIN' | 'EMPLOYEE';
// type num1 = number | string;

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

export interface IResponse<T> {
  data: T;
  result: boolean;
  status: HttpStatusCode;
}

// const response1: IResponse<Blog[]> = {
//   data: [{ id: 2, title: '', body: '', gender: Gender.MALE }],
//   status: 200,
//   result: true,
// };

// const response2: IResponse<Album[]> = {
//   data: [{ id: 2, title: '', userId: 4 }],
//   status: 200,
//   result: true,
// };

// ─── UTILITY TYPES ───────────────────────────────────────────────────────────

export type A1 = {
  name: string;
  surname: string;
  age: number;
  email?: string;
};

// Partial — makes every property optional
export type A2 = Partial<A1>;
// { name?: string; surname?: string; age?: number; email?: string }

// Required — makes every property required (including optionals)
export type A3 = Required<A1>;
// { name: string; surname: string; age: number; email: string }

// Readonly — prevents reassignment of any property
export type A4 = Readonly<A1>;
// A4.name = 'x'  → compile error

// Record — builds an object type with fixed keys and a uniform value type
export type RoleMap = Record<'admin' | 'editor' | 'viewer', boolean>;
// { admin: boolean; editor: boolean; viewer: boolean }

// Omit — removes specific keys (opposite of Pick, which is excluded here)
export type WithoutEmail = Omit<A1, 'email'>;
// { name: string; surname: string; age: number }

// Exclude — removes members from a union type
export type Status = 'active' | 'inactive' | 'banned';
export type ActiveStatus = Exclude<Status, 'banned'>;
// 'active' | 'inactive'

// Extract — keeps only the members that match a union
export type BannedOnly = Extract<Status, 'banned' | 'inactive'>;
// 'inactive' | 'banned'

// NonNullable — strips null and undefined from a type
type MaybeString = string | null | undefined;
export type DefiniteString = NonNullable<MaybeString>;
// string

// ReturnType — infers the return type of a function
function getUser() {
  return { id: 1, name: 'John' };
}
export type UserReturn = ReturnType<typeof getUser>;
// { id: number; name: string }

// Parameters — infers the parameter tuple of a function
type LoginFn = (email: string, password: string) => boolean;
export type LoginParams = Parameters<LoginFn>;
// [email: string, password: string]

// Awaited — unwraps a Promise type (useful for async functions)
type AsyncUser = Promise<A1>;
export type ResolvedUser = Awaited<AsyncUser>;
// A1
