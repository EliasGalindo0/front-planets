export default interface Planets {
  id: number;
  name: string;
  url: string;
  climate: string;
  terrain: string;
  population: number;
  createdAt?: Date;
  updatedAt?: Date;
}
