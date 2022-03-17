import { ActionReducerMap } from '@ngrx/store';
import * as kernel from './kernel.reducer';
import * as provinces from '../../provinces/redux/provinces.reducer';

export interface ApplicationState {
  kernel:   kernel.KernelState;
  provinces: provinces.ProvincesState
}

export const applicationReducers: ActionReducerMap<ApplicationState> = {
    kernel: kernel.kernelReducer,
    provinces: provinces.provincesReducer
};