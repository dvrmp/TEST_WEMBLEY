import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/kernel/redux/reducers.index';
import { ProvinceDetails } from '../../dtos/province-details.dto';
import { provincesActions } from '../../redux/provinces.actions';

@Component({
  selector: 'app-details-province',
  templateUrl: './details-province.component.html',
  styleUrls: ['./details-province.component.css']
})
export class DetailsProvinceComponent implements OnInit {

  public province: ProvinceDetails = null;
  public provinceName: string = null;

  private codpro: string = null;

  constructor(private store: Store<ApplicationState>, private router: Router) {
    this.codpro =  this.router.getCurrentNavigation().extras.state['codpro'];
  }


  ngOnInit(): void {
    this.store.dispatch(provincesActions.GET_DETAIL_PROVINCE_REQUEST({ codpro: this.codpro}));
    this.store.select('provinces').subscribe(response => {
      this.province = response.currentProvinceSelected;
      this.provinceName = response.provinces.find(x => x.CODPROV === this.codpro).NOMBRE_PROVINCIA;
    });
  }
}
