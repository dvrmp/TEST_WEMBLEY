import { Action, createReducer, on } from '@ngrx/store';
import { ProvinceDetails } from '../dtos/province-details.dto';
import { ProvinceBreadcrumb } from '../interfaces/province-breadcrumb.interface';
import { Province } from '../interfaces/province.interface';
import { provincesActions } from './provinces.actions';

export interface ProvincesState {
  provinces: Province[],
  breadcrumb: ProvinceBreadcrumb,
  currentProvinceSelected: ProvinceDetails
}

const initialState: ProvincesState = {
  provinces: [],
  breadcrumb: null,
  currentProvinceSelected: null
};

const _provincesReducer = createReducer(
  initialState,
  on(provincesActions.GET_ALL_PROVINCES_SUCCESS, (state, { provinces, breadcrumb }) => ({ ...state, provinces, breadcrumb })),
  on(provincesActions.REMOVE_PROVINCE, (state,{ province }) => ({...state, provinces: state.provinces.filter(x => x.CODPROV !== province.CODPROV)})),
  on(provincesActions.GET_DETAIL_PROVINCE_SUCCESS, (state,{ province }) => ({...state, currentProvinceSelected: province}))
);

export function provincesReducer(state: ProvincesState, action: Action) {
  return _provincesReducer(state, action);
}
