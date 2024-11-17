import { Component, Input, TrackByFunction } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll.service';
import { DummyData } from 'src/app/types/products';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() set dummyData(data: DummyData[]) {
    this.dummyData$.next(data);
    this.limit$.next(30);
  }

  private defaultValue = 30;

  private dummyData$ = new BehaviorSubject<DummyData[]>([]);

  private limit$ = new BehaviorSubject<number>(30);

  dataSource$ = new BehaviorSubject<any>(null);

  displayedColumns: string[] = ['id', 'firstName'];

  identity: TrackByFunction<DummyData> = (_, item: DummyData) => item.id;

  constructor(private scrollService: ScrollService) {
    this.limit$.subscribe(d => {
      const data = this.dummyData$.value.slice(0, this.limit$.value);
      this.dataSource$.next(new MatTableDataSource<DummyData>(data));
    });
  }

  onNearEndScroll() {
    this.limit$.next(this.limit$.value + this.defaultValue);
  }

}
