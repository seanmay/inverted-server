export interface Validation {
  (x: any): boolean;
}

export type DateCompatible = string | number | Date;