import { Component, OnInit } from '@angular/core';
//********************************************************* */
//  REDUX
import { Store } from '@ngrx/store';
import { kernelActions } from './modules/kernel/redux/kernel.actions';
import { ApplicationState } from './modules/kernel/redux/reducers.index';
//********************************************************* */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'climatic-application';

  constructor(private store: Store<ApplicationState>) { }


  ngOnInit(): void {
    this.store.dispatch(kernelActions.setApplicationRunning());
  }

}
