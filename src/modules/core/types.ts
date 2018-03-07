export interface Transform<A, B> {
  (x: A): B;
}