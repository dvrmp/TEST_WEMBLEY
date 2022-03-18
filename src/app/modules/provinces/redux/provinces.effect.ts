import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ApplicationState } from '../../kernel/redux/reducers.index';
import { ProvincesService } from '../services/provinces.service';
import { provincesActions } from './provinces.actions';
import { kernelActions } from '../../kernel/redux/kernel.actions';

@Injectable()
export class ProvincesEffects {
    provinces$ = createEffect(() =>
        this.actions$.pipe(
            ofType(provincesActions.GET_ALL_PROVINCES_REQUEST),
            exhaustMap(() => {
                this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: true }));
                return this.provincesService.getAll().pipe(
                    map(response => {
                        return provincesActions.GET_ALL_PROVINCES_SUCCESS({ provinces: response.provincias, breadcrumb: response.breadcrumb[0] });
                    }),
                    tap({
                        complete: () => {
                            this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: false }));
                        }
                    }),
                    catchError(error => {
                        this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: false }));
                        return of(provincesActions.GET_ALL_PROVINCES_FAILURE({ error }));
                    })
                )
            })
        )
    );

    provinceDetails$ = createEffect(() =>
    this.actions$.pipe(
        ofType(provincesActions.GET_DETAIL_PROVINCE_REQUEST),
        exhaustMap((action) => {
            this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: true }));
            return this.provincesService.getDetail(action.codpro).pipe(
                map(response => {
                    return provincesActions.GET_DETAIL_PROVINCE_SUCCESS({ province: response });
                }),
                tap({
                    complete: () => {
                        this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: false }));
                    }
                }),
                catchError(error => {
                    this.store.dispatch(kernelActions.gui.DISPLAY_SPINNER({ show: false }));
                    return of(provincesActions.GET_DETAIL_PROVINCE_FAILURE({ error }));
                })
            )
        })
    )
);

    constructor(private actions$: Actions, private provincesService: ProvincesService, private store: Store<ApplicationState>) { }
}
