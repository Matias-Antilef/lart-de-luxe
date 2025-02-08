export interface FilterForm {
  name?: string;
  priceMin: number;
  priceMax: number;
  category?: string;
  orderBy?:
    | "orderByHPrice"
    | "orderByLPrice"
    | "orderByNameAz"
    | "orderByNameZa";
}
