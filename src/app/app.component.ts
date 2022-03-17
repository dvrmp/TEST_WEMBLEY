import { AfterViewInit, Component, OnInit } from '@angular/core';
//********************************************************* */
//  REDUX
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { kernelActions } from './modules/kernel/redux/kernel.actions';
import { ApplicationState } from './modules/kernel/redux/reducers.index';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'climatic-application';

  constructor(private store: Store<ApplicationState>, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.spinner.show()
    this.store.dispatch(kernelActions.SET_APPLICATION_RUNNING());
  }

  ngAfterViewInit(): void {
    this.spinner.show();

    this.store.select('kernel').subscribe((response) => {
      if(response.spinnerDisplay) this.spinner.show();
      if(response.spinnerDisplay === false) {
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      }
    });
  }


}
