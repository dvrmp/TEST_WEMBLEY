import { createAction, props } from '@ngrx/store';
import { ProvinceBreadcrumb } from '../interfaces/province-breadcrumb.interface';
import { Province } from '../interfaces/province.interface';

const GET_ALL_PROVINCES_REQUEST = createAction('[PROVINCES] GET ALL PROVINCES [REQUEST]');
const GET_ALL_PROVINCES_SUCCESS = createAction('[PROVINCES] GET ALL PROVINCES [SUCCESS]', props<{ provinces: Province[], breadcrumb: ProvinceBreadcrumb }>());
const GET_ALL_PROVINCES_FAILURE = createAction('[PROVINCES] GET ALL PROVINCES [FAILURE]', props<{ error: Error}>());

const REMOVE_PROVINCE = createAction('[PROVINCES] REMOVE_PROVINC', props<{ province: Province}>());

export const provincesActions = {
    GET_ALL_PROVINCES_REQUEST,
    GET_ALL_PROVINCES_SUCCESS,
    GET_ALL_PROVINCES_FAILURE,
    REMOVE_PROVINCE
}
