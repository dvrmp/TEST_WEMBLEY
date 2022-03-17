import { createAction, props } from '@ngrx/store';

const SET_APPLICATION_RUNNING = createAction('[KERNEL] Application running');
const DISPLAY_SPINNER = createAction('[KERNEL][GUI] DISPLAY SPINNER', props<{show: boolean}>());

export const kernelActions = {
    SET_APPLICATION_RUNNING,
    gui: {
        DISPLAY_SPINNER,
    }
}
