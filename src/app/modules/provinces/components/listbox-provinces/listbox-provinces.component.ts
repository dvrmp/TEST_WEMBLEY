import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/kernel/redux/reducers.index';
import { Province } from '../../interfaces/province.interface';
import { provincesActions } from '../../redux/provinces.actions';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-listbox-provinces',
  templateUrl: './listbox-provinces.component.html',
  styleUrls: ['./listbox-provinces.component.css']
})
export class ListboxProvincesComponent implements OnInit {

  @Input('datasource') datasource: Province[] = [];

  constructor(private store: Store<ApplicationState>, private notificationService: NzNotificationService) { }

  ngOnInit(): void {
  }

  removeProvince(province: Province): void {
    this.store.dispatch(provincesActions.REMOVE_PROVINCE({ province }));
    this.notificationService.create(
      'success',
      'Provincia eliminada',
      `La provincia: ${province.NOMBRE_PROVINCIA} con código: ${province.CODPROV} , ha sido eliminada correctamente`
    );
  }

}
