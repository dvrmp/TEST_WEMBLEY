import { Action, createReducer, on } from '@ngrx/store';
import { kernelActions } from './kernel.actions';

export interface KenerlState {
    running: boolean;
}

const initialState: KenerlState = {
    running: false
};
 
const _kernelReducer = createReducer(
  initialState,
  on(kernelActions.setApplicationRunning, ({ running }) => ({ running: true })),
);
 
export function kernelReducer(state: KenerlState, action: Action) {
  return _kernelReducer(state, action);
}