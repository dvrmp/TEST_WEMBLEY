import { createAction } from '@ngrx/store';

const setApplicationRunning = createAction('[KERNEL] Application running');

export const kernelActions = {
    setApplicationRunning
}
