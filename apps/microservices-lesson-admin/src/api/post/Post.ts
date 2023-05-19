import { User } from "../user/User";

export type Post = {
  createdAt: Date;
  id: string;
  like: boolean | null;
  uid?: User | null;
  updatedAt: Date;
  value: string;
};
