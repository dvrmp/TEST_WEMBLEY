import { StateSky } from "./state-sky.interface";
import { Temperatures } from "./temperatures.interface";

export interface City {
  id: string;
  idProvince: string;
  name: string;
  nameProvince: string;
  stateSky: StateSky;
  temperatures: Temperatures;
}
