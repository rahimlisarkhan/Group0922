// export type Blog = {
//   id: number;
//   title: string;
//   body: string;
// };

import { Gender } from './global';

export interface Blog {
  id: number;
  title: string;
  gender: Gender;
  body: string;
}
