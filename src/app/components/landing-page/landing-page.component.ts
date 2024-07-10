import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {SelectItem} from "primeng/api";

type Car =  {
  id?: number,
  brand?: string,
  carModel?: string,
  price?: number,
  rating?: number,
  carImage?: string,
  InStockStatus?: boolean
}

type Cars = Array<Car>;


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export default class LandingPageComponent implements OnInit{

  sortKey: any;


  public automotives$: Observable<Cars> = this.getCars();

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;



  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

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
