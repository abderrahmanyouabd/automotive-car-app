import {Component} from '@angular/core';
import {Observable, of} from "rxjs";
import {Cars} from "../../commonTypes";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export default class LandingPageComponent {


  automotives$: Observable<Cars> = this.getCars();

  private getCars(): Observable<Cars> {
    return of([
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

    ])
  }

}
