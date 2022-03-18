import { createAction, props } from '@ngrx/store';
import { ProvinceDetails } from '../dtos/province-details.dto';
import { ProvinceBreadcrumb } from '../interfaces/province-breadcrumb.interface';
import { Province } from '../interfaces/province.interface';

const GET_ALL_PROVINCES_REQUEST = createAction('[PROVINCES] GET ALL PROVINCES [REQUEST]');
const GET_ALL_PROVINCES_SUCCESS = createAction('[PROVINCES] GET ALL PROVINCES [SUCCESS]', props<{ provinces: Province[], breadcrumb: ProvinceBreadcrumb }>());
const GET_ALL_PROVINCES_FAILURE = createAction('[PROVINCES] GET ALL PROVINCES [FAILURE]', props<{ error: Error}>());

const REMOVE_PROVINCE = createAction('[PROVINCES] REMOVE_PROVINC', props<{ province: Province}>());


const GET_DETAIL_PROVINCE_REQUEST = createAction('[PROVINCE DETAIL] GET DETAIL PROVINCE [REQUEST]', props<{codpro: string}>());
const GET_DETAIL_PROVINCE_SUCCESS = createAction('[PROVINCE DETAIL] GET DETAIL PROVINCE [SUCCESS]', props<{province: ProvinceDetails}>());
const GET_DETAIL_PROVINCE_FAILURE = createAction('[PROVINCE DETAIL] GET DETAIL PROVINCE [FAILURE]', props<{ error: Error}>());


export const provincesActions = {
    GET_ALL_PROVINCES_REQUEST,
    GET_ALL_PROVINCES_SUCCESS,
    GET_ALL_PROVINCES_FAILURE,
    REMOVE_PROVINCE,
    GET_DETAIL_PROVINCE_REQUEST,
    GET_DETAIL_PROVINCE_SUCCESS,
    GET_DETAIL_PROVINCE_FAILURE
}
