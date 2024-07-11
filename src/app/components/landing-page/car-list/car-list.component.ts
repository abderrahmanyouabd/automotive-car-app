import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectItem } from 'primeng/api';
import { Car } from '../../../commonTypes';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export default class CarListComponent implements OnInit {
  sortKey: any;

  @Input() public automotives$!: Observable<Car[]>;

  @Input() public title: string | undefined;

  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: keyof Car;

  private sortFieldSubject = new BehaviorSubject<keyof Car>('price');
  private sortOrderSubject = new BehaviorSubject<number>(1);

  sortedAutomotives$!: Observable<Car[]>;


  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
    this.sortedAutomotives$ = this.automotives$;

  }

  onSortChange(event: any) {

    this.sortedAutomotives$ = combineLatest([
      this.automotives$,
      this.sortFieldSubject,
      this.sortOrderSubject
    ]).pipe(
      map(([automotives, sortField, sortOrder]) => {
        return automotives.slice().sort((a, b) => {
          let result = 0;
          // @ts-ignore
          if (a[sortField] < b[sortField]) {
            result = -1;
            // @ts-ignore
          } else if (a[sortField] > b[sortField]) {
            result = 1;
          }
          return result * sortOrder;
        });
      })
    );

    const value: string = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1) as keyof Car;
    } else {
      this.sortOrder = 1;
      this.sortField = value as keyof Car;
    }

    this.sortFieldSubject.next(this.sortField);
    this.sortOrderSubject.next(this.sortOrder);
  }
}
