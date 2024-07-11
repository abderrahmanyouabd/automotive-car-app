import {Actions, createEffect, ofType} from "@ngrx/effects";
import {onLoadAutomotivesAction, onLoadAutomotivesSuccessAction} from "../actions/automotives.action";
import {catchError, EMPTY, exhaustMap, map, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export default class AutomotivesEffects {

  public onLoadCars$ = createEffect(() => this.action$.pipe(
    ofType(onLoadAutomotivesAction),
    exhaustMap(() => of([
      {
        id: 1, brand: 'Bmw', carModel: 'rgx2009', price: 4000, rating: 4.3, InStockStatus: true, carImage: 'https://picsum.photos/200/200?random=1'
      },
      {
        id: 2, brand: 'Hyundai', carModel: 'pml5980', price: 5000, rating: 4.5, InStockStatus: false, carImage: 'https://picsum.photos/200/200?random=2'
      },
      {
        id: 3, brand: 'Peugeo', carModel: 'mpl1997', price: 4700, rating: 4.7, InStockStatus: true, carImage: 'https://picsum.photos/200/200?random=3'
      },
      {
        id: 4, brand: 'Bmw', carModel: 'gbx2003', price: 3700, rating: 3.5, InStockStatus: true, carImage: 'https://picsum.photos/200/200?random=4'
      }

    ]).pipe(map((data) => onLoadAutomotivesSuccessAction({payload: data}), catchError(() => EMPTY))))));


  constructor(public action$: Actions) {

  }

}
