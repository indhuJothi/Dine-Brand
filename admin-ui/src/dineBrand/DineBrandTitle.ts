import { DineBrand as TDineBrand } from "../api/dineBrand/DineBrand";

export const DINEBRAND_TITLE_FIELD = "id";

export const DineBrandTitle = (record: TDineBrand): string => {
  return record.id || record.id;
};
