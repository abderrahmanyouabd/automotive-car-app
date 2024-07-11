import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {SelectItem} from "primeng/api";
import {Cars} from "../../../commonTypes";


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export default class CarListComponent implements OnInit{
  sortKey: any;

  @Input()
  public automotives$!: Observable<Cars>;

  @Input()
  public title: string | undefined;

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

}
