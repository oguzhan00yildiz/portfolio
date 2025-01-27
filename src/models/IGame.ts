import type {IDetails} from "@/models/IDetails";

export interface IGame {
  id: string,
  title: string;
  subtitle: string;
  description: string;
  users: number;
  createdAt: string;
  engine: string;
  src: string;
  role: string;
  details: IDetails;
}