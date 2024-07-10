import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

type Car =  {
  id?: number,
  brand?: string,
  modell?: string,
  price?: number,
  rating?: number,
  image?: string,
  InStockStatus?: 'IN STOCK' | 'OUT OF STOCK'
}

type Cars = Array<Car>;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export default class LandingPageComponent{

  public automotives$: Observable<Cars> = this.getCars();


  private getCars(): Observable<Cars> {
    return of([
      {
        id: 1, brand: 'Bmw', model: 'rgx2009', price: 4000, rating: 4.3, InStockStatus: 'IN STOCK'
      },
      {
        id: 2, brand: 'Hyundai', model: 'pml5980', price: 5000, rating: 4.5, InStockStatus: 'IN STOCK'
      },
      {
        id: 3, brand: 'Peugeo', model: 'rgx2009', price: 4700, rating: 4.7, InStockStatus: 'IN STOCK'
      },
      {
        id: 4, brand: 'Bmw', model: 'rgx2009', price: 3700, rating: 3.5, InStockStatus: 'IN STOCK'
      }

    ])
  }
}
