import { ProvinceBreadcrumb } from "../interfaces/province-breadcrumb.interface";
import { Province } from "../interfaces/province.interface";
import { Community } from "../interfaces/community.inteface";
import { City } from "../interfaces/city.interface";
import { Today } from "../interfaces/today.interface";

export interface ProvinceDetails {
  title: string;
  today: Today;
  tomorrow: Today;
  ciudades: City[];
  provincia: Province;
  comautonoma: Community;
  breadcrumb: ProvinceBreadcrumb[];
  metadescripcion: string;
  keywords: string;
}




