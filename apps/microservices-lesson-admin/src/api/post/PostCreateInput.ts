import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  like?: boolean | null;
  uid?: UserWhereUniqueInput | null;
  value: string;
};
