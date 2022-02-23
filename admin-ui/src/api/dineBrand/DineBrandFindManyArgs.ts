import { DineBrandWhereInput } from "./DineBrandWhereInput";
import { DineBrandOrderByInput } from "./DineBrandOrderByInput";

export type DineBrandFindManyArgs = {
  where?: DineBrandWhereInput;
  orderBy?: DineBrandOrderByInput;
  skip?: number;
  take?: number;
};
