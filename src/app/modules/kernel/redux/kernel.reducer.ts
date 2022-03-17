import { Action, createReducer, on } from '@ngrx/store';
import { kernelActions } from './kernel.actions';

export interface KernelState {
  running: boolean;
  spinnerDisplay: boolean;
}

const initialState: KernelState = {
  running: false,
  spinnerDisplay: false
};

const _kernelReducer = createReducer(
  initialState,
  on(kernelActions.SET_APPLICATION_RUNNING, (state) => ({ ...state, running: true })),
  on(kernelActions.gui.DISPLAY_SPINNER, (state, { show }) => ({ ...state, spinnerDisplay: show })),

);

export function kernelReducer(state: KernelState, action: Action) {
  return _kernelReducer(state, action);
}