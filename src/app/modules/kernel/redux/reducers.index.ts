import { ActionReducerMap } from '@ngrx/store';
import * as kernel from './kernel.reducer';

export interface ApplicationState {
  kernel:   kernel.KenerlState;
}
export const applicationReducers: ActionReducerMap<ApplicationState> = {
    kernel: kernel.kernelReducer
};