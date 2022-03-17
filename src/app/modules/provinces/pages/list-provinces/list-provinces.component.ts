import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'src/app/modules/kernel/redux/reducers.index';
import { ProvinceBreadcrumb } from '../../interfaces/province-breadcrumb.interface';
import { Province } from '../../interfaces/province.interface';
import { provincesActions } from '../../redux/provinces.actions';

@Component({
  selector: 'app-list-provinces',
  templateUrl: './list-provinces.component.html',
  styleUrls: ['./list-provinces.component.css']
})
export class ListProvincesComponent implements OnInit {

  public provinces: Province[] = [];
  public communities: string[] = [];
  public header: ProvinceBreadcrumb;
  public selectedCommunityFilter: string = null;
  
  private provincesBackup: Province[] = [];
  
  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.select('provinces').subscribe(response => {
      if(response.provinces.length === 0) {
        this.store.dispatch(provincesActions.GET_ALL_PROVINCES_REQUEST());
      }else {
        this.provinces =  response.provinces;
        this.provincesBackup =  response.provinces;
        this.header = response.breadcrumb;
        this.communities  = [...new Set(this.provinces.map(x => x.COMUNIDAD_CIUDAD_AUTONOMA))];
      }
    })
  }

  filterByCommunity(comunnity: string): void {
    this.provinces = this.provincesBackup;
    this.provinces = this.provinces.filter(x => x.COMUNIDAD_CIUDAD_AUTONOMA === comunnity);
  }

  restoreProvinces(): void {
    this.store.dispatch(provincesActions.GET_ALL_PROVINCES_REQUEST());
  }

  cleanFilters(): void {
    this.provinces = this.provincesBackup;
  }

}
