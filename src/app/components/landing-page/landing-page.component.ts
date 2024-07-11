import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Cars} from "../../commonTypes";
import {Store} from "@ngrx/store";
import {InitialCars} from "../../store/reducers/automotives.reducer";
import {onLoadAutomotivesAction} from "../../store/actions/automotives.action";
import {SelectItem} from "primeng/api";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export default class LandingPageComponent implements OnInit{


  automotives$: Observable<Cars> = this.store.select((data) => data.a1stChaseStore.cars);


  constructor(private store: Store<{a1stChaseStore: InitialCars}>) {
  }

  public ngOnInit(): void {
        this.store.dispatch(onLoadAutomotivesAction());
    }

}
