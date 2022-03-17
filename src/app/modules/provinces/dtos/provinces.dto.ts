import { ProvinceBreadcrumb } from "../interfaces/province-breadcrumb.interface";
import { Province } from "../interfaces/province.interface";

export interface GET_ALL_PROVINCES_RESPONSE_DTO {
    title: string;
    provincias: Province[];
    breadcrumb: ProvinceBreadcrumb[];
    metadescripcion: string;
    keywords: string;
}

