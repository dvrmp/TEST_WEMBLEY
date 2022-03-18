import { ProvinceBreadcrumb } from "../interfaces/province-breadcrumb.interface";
import { Province } from "../interfaces/province.interface";

export interface Provinces {
    title: string;
    provincias: Province[];
    breadcrumb: ProvinceBreadcrumb[];
    metadescripcion: string;
    keywords: string;
}

