import { Action, createReducer, on } from '@ngrx/store';
import { ProvinceBreadcrumb } from '../interfaces/province-breadcrumb.interface';
import { Province } from '../interfaces/province.interface';
import { provincesActions } from './provinces.actions';

export interface ProvincesState {
  provinces: Province[],
  breadcrumb: ProvinceBreadcrumb
}

const initialState: ProvincesState = {
  provinces: [],
  breadcrumb: null
};

const _provincesReducer = createReducer(
  initialState,
  on(provincesActions.GET_ALL_PROVINCES_SUCCESS, (state, { provinces, breadcrumb }) => ({ ...state, provinces, breadcrumb })),
  on(provincesActions.REMOVE_PROVINCE, (state,{ province }) => ({...state, provinces: state.provinces.filter(x => x.CODPROV !== province.CODPROV)}))
);

export function provincesReducer(state: ProvincesState, action: Action) {
  return _provincesReducer(state, action);
}