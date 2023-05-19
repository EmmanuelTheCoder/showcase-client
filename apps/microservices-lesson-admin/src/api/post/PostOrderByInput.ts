import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  like?: SortOrder;
  uidId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
