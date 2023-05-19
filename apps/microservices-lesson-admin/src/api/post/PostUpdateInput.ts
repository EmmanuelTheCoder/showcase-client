import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  like?: boolean | null;
  uid?: UserWhereUniqueInput | null;
  value?: string;
};
